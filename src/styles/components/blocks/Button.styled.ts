import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 56px;
  background-color: #0066ff;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  box-sizing: border-box;
  :hover {
    background-color: #045de5;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: ${({ theme }) => theme.sizes.container.tabletWidth - 32}px;
  }
  @media ${({ theme }) => theme.media.laptop} {
    width: ${({ theme }) => theme.sizes.container.laptopWidth - 32}px;
  }
  @media ${({ theme }) => theme.media.laptopL} {
    width: ${({ theme }) => theme.sizes.container.laptopLWidth - 32}px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: ${({ theme }) => theme.sizes.container.desktopWidth - 32}px;
  }
  p {
    font-weight: 600;
  }
`;
