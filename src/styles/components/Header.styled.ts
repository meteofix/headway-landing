import styled from 'styled-components';

export const Header = styled.div`
  width: ${({ theme }) => theme.sizes.container.width}px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  @media ${({ theme }) => theme.media.tablet} {
    width: ${({ theme }) => theme.sizes.container.tabletWidth}px;
  }
  @media ${({ theme }) => theme.media.laptop} {
    width: ${({ theme }) => theme.sizes.container.laptopWidth}px;
  }
  @media ${({ theme }) => theme.media.laptopL} {
    width: ${({ theme }) => theme.sizes.container.laptopLWidth}px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: ${({ theme }) => theme.sizes.container.desktopWidth}px;
  }
`;
export const Logo = styled.img`
  width: 122px;
  height: 24px;
  padding: 10px 8px;
  cursor: pointer;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
`;
export const ButtonArea = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
  img {
    padding: 14px;
  }
`;
