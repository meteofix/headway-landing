import styled from 'styled-components';
import { Paragraph } from '../../components';

export const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 8px;

  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
export const CommentText = styled(Paragraph)`
  font-size: 14px;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 12px;
`;
export const CommentAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;
export const Stars = styled.img`
  width: 303px;
  height: 16px;
`;
export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;
export const SocialIcon = styled.img`
  margin-top: 2px;
  margin-left: 4px;
`;
export const Nickname = styled(Paragraph)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;
