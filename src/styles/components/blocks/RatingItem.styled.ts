import styled from 'styled-components';
import { Paragraph } from '../../components';

export const RatingItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 12px;
`;
export const RatingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  height: 40px;
  margin-bottom: 5px;
  img {
    width: 33px;
    height: 32px;
    margin-left: 4px;
  }
`;
export const Rate = styled.p<{ color: string }>`
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  //color: #0066ff;
  color: ${({ color }) => color};
  margin-right: 8px;
`;
export const Count = styled(Paragraph)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 5px;
`;

export const Stars = styled.img`
  width: 89px;
  height: 16px;
`;
