import styled from 'styled-components';
import Lottie from 'lottie-react';
import { Block } from '../../components';

export const Block1 = styled(Block)`
  border: 1px solid ${({ theme }) => theme.colors.borderBlock1};
  background-color: ${({ theme }) => theme.colors.bgBlock1};
  padding-bottom: 0;
  img {
    margin-top: 24px;
    margin-bottom: -24px;
  }
`;
export const StyledLottie = styled(Lottie)`
  margin-top: 25px;
`;
