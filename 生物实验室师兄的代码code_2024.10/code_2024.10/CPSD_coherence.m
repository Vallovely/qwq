clear, close all;
clc;

% ���������Ϊ1000Hz
fs = samplerate;  
data = X;  % 6��ͨ�����ź�����
numChannels = size(data, 1);  
targetChannel = numChannels;  % ������ͨ����ΪĿ��ͨ��
nfft = 512;  % ����Ҷ�任����
windowSize = 256;  % STFT���ڴ�С
noverlap = 128;  % �����ص�
freqRange = [0 20];  % ����Ȥ��Ƶ�ʷ�Χ

% 1. ���źŽ��д�ͨ�˲� (theta���� 4-8 Hz)
filt_low = 4; filt_high = 8;  
[b, a] = butter(2, [filt_low filt_high] / (fs/2), 'bandpass');  
filtered_data = filtfilt(b, a, data')';  % ��ÿ��ͨ�������˲�

% 2. ��ǰ���ͨ���������ͨ�����������
for channel = 1:numChannels-1
    % ������ͨ������STFT
    [spec1, faxis, taxis] = spectrogram(filtered_data(channel, :), hamming(windowSize), noverlap, nfft, fs);
    [spec2, ~, ~] = spectrogram(filtered_data(targetChannel, :), hamming(windowSize), noverlap, nfft, fs);

    % 3. ���㻥�������ܶȺ��Թ������ܶ�
    cpsd12 = spec1 .* conj(spec2);  % �����ܶ�
    psd1 = abs(spec1).^2;           % �����ܶ�1
    psd2 = abs(spec2).^2;           % �����ܶ�2

    % 4. ���������
    coherence = abs(cpsd12).^2 ./ (psd1 .* psd2);  

    % 5. �����������ͼ
    figure;
    imagesc(taxis, faxis, coherence);
    axis xy;
    xlabel('Time (s)');
    ylabel('Frequency (Hz)');
    title(['Coherence: Channel ' num2str(channel) ' vs Channel ' num2str(targetChannel)]);
    colorbar;
    caxis([0 1]);  % ����Է�Χ0��1
    ylim(freqRange);  % ֻչʾ0-20 Hz��Ƶ��
end
