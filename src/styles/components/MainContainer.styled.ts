import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto 96px;
  width: ${({ theme }) => theme.sizes.container.width}px;
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
