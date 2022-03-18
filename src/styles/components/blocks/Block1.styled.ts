import styled from 'styled-components';
import { Block } from '../../components';
import { Button } from './Button.styled';

export const Block1 = styled(Block)`
  border: 1px solid ${({ theme }) => theme.colors.borderBlock1};
  background-color: ${({ theme }) => theme.colors.bgBlock1};
  padding-bottom: 0;
  img {
    margin-top: 24px;
    margin-bottom: -24px;
  }
`;
export const StyledLottie = styled.div`
  margin-top: 25px;
  height: 270px;
`;
export const ButtonOnlyDesktop = styled(Button)`
  display: none;
  margin-top: 24px;
  @media ${({ theme }) => theme.media.laptop} {
    display: flex;
    width: ${({ theme }) => theme.sizes.container.width}px;
  }
`;
export const Image1 = styled.img`
  width: 327px;
  height: 304px;
`;
