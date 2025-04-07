clear, close all
clc

loading;

windowSize = 2048;    % STFT���ڴ�С
noverlap = 1024;      % �ص�����
nfft = 2048;          % FFT����
fs = samplerate;      % ������

numChannels = size(X, 1);  
targetChannel = numChannels;  % ������ͨ����ΪĿ��ͨ��         
stftWindow = hamming(windowSize);

% ��ʼ������Ծ��� (Ƶ�� x ʱ�� x ͨ��)
coherenceMatrix = [];

% ƽ���������� (�ƶ�ƽ��)
numSegments = 10;  % ÿ��ʱ����ü�������ƽ��

% ����ÿ���ź�ͨ������Ŀ��ͨ���Ƚϣ�
for channel = 1:numChannels-1
    % ���������źŵ�STFT
    [S1, F, T] = spectrogram(X(channel,:), stftWindow, noverlap, nfft, fs);
    [S2, ~, ~] = spectrogram(X(targetChannel,:), stftWindow, noverlap, nfft, fs);

    % ��ʼ�� Pxy, Pxx, Pyy ����
    Pxy = S1 .* conj(S2);  % CPSD
    Pxx = abs(S1).^2;      % PSD of signal 1
    Pyy = abs(S2).^2;      % PSD of signal 6

    % ƽ����������ƽ�� Pxy, Pxx, Pyy
    mean_Pxy = movmean(Pxy, numSegments, 2);  % 2��ʱ���᷽��
    mean_Pxx = movmean(Pxx, numSegments, 2);
    mean_Pyy = movmean(Pyy, numSegments, 2);

    % ���������
    Cxy = abs(mean_Pxy).^2 ./ (mean_Pxx .* mean_Pyy);

    % �洢ÿ��ͨ���������
    coherenceMatrix(:, :, channel) = Cxy;
end

% �����������ͼ
for channel = 1:numChannels-1
    figure;
    imagesc(T, F, coherenceMatrix(:,:,channel));
    axis xy;
    xlabel('Time (s)');
    ylabel('Frequency (Hz)');
    title(['Time-Frequency Coherence: Channel ' num2str(channel) ' vs Channel ' num2str(targetChannel)]);
    colorbar;
    ylim([0 20]);  % ֻ����0-20Hz��Ƶ�ʷ�Χ
end
