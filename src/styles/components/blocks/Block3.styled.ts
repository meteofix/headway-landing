import styled from 'styled-components';
import { Block } from '../../components';

export const Block3 = styled(Block)`
  background-color: ${({ theme }) => theme.colors.bgBlock3};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock3};
`;
export const Image01 = styled.img`
  margin-top: 40px;
  margin-bottom: 24px;
`;
export const Image02 = styled.img`
  margin-top: 24px;
  margin-bottom: 32px;
`;
export const ImageArrow = styled.img`
  margin-top: 8px;
  margin-bottom: 8px;
`;
