import styled from 'styled-components';
import { Block } from '../../components';

export const Block4 = styled(Block)`
  background-color: ${({ theme }) => theme.colors.bgBlock4};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock4};
`;
