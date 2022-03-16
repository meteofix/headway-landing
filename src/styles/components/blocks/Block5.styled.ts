import styled from 'styled-components';
import { Block } from '../../components';

export const Block5 = styled(Block)`
  background-color: ${({ theme }) => theme.colors.bgBlock5};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock5};
`;

export const Image = styled.img`
  margin-bottom: -37px;
`;
