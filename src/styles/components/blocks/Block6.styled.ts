import styled from 'styled-components';
import { Block } from '../../components';

export const Block6 = styled(Block)`
  background-color: ${({ theme }) => theme.colors.bgBlock6};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock6};
`;
export const BlueText = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.link};
`;
export const CommentsWrapper = styled.div`
  margin-top: 16px;
`;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  width: 100%;
  margin-top: 8px;
  > div:first-child {
    margin-right: 12px;
  }
`;
