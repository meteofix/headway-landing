import styled from 'styled-components';
import { Block } from '../../components';

export const Block5 = styled(Block)`
  background-color: ${({ theme }) => theme.colors.bgBlock5};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock5};
`;

export const Image = styled.img`
  width: 327px;
  height: 304px;
  margin-bottom: -37px;
`;
