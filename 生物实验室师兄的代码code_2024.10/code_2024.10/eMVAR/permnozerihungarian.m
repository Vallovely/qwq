% function adapted from the LiNGAM package
% complete software may be downloaded from http://www.cs.helsinki.fi/group/neuroinf/lingam/

function [Wopt,rowp] = permnozerihungarian( W )

%--------------------------------------------------------------------------
% Find best row permutation by hungarian algorithm
% [Uses the Matlab implementation of the Hungarian algorithm written by
% Niclas Borlin]
%--------------------------------------------------------------------------

n = size(W,1);

% Create score matrix
S = 1./abs(W);

% Call the hungarian algorithm
[c,T]=hungarian(S');
    
% Permute W to get Wopt
Wopt = W(c,:);

% Return the optimal permutation as well
rowp = c;

