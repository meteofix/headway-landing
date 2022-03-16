import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px;
  margin: 0 8px 8px;
  align-items: center;
  text-align: center;
  overflow: hidden;
  border-radius: 12px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 130%;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 138%;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  margin-top: 0;
  margin-bottom: 0;
`;
export const ParagraphSecondary = styled(Paragraph)`
  opacity: 40%;
`;
