import styled from 'styled-components';
import { Block, Paragraph } from '../../components';

export const Block7 = styled(Block)`
  border: 1px solid ${({ theme }) => theme.colors.borderBlock1};
  background-color: ${({ theme }) => theme.colors.bgBlock1};
  text-align: left;
  align-items: flex-start;
`;
export const LogoImage = styled.img`
  margin-bottom: 24px;
`;
export const SocialTitle = styled(Paragraph)`
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin-bottom: 8px;
`;
export const Icon = styled.img`
  margin-right: 15px;
  cursor: pointer;
`;
