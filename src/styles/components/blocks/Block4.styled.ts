import styled from 'styled-components';
import { Block } from '../../components';

export const Block4 = styled(Block)`
  background-color: ${({ theme }) => theme.colors.bgBlock4};
  border: 1px solid ${({ theme }) => theme.colors.borderBlock4};
  position: relative;
`;
export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 24px;
  margin-right: 0px;
  min-height: 100px;

  width: ${({ theme }) => theme.sizes.container.width - 16}px;
  @media ${({ theme }) => theme.media.tablet} {
    width: ${({ theme }) => theme.sizes.container.tabletWidth - 16}px;
  }
  @media ${({ theme }) => theme.media.laptop} {
    width: ${({ theme }) => theme.sizes.container.laptopWidth - 16}px;
  }
  @media ${({ theme }) => theme.media.laptopL} {
    width: ${({ theme }) => theme.sizes.container.laptopLWidth - 16}px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: ${({ theme }) => theme.sizes.container.desktopWidth - 16}px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoryRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  padding-left: 16px;
`;

export const Category = styled.div<{ active: boolean }>`
  display: flex;
  flex: 0 0 auto;
  height: 40px;
  padding: 8px;
  background-color: ${({ active }) => (active ? '#E6E9F5' : 'white')};
  :hover {
    background-color: #e6e9f5;
  }
  border: 1px solid
    ${({ active }) => (active ? '#0066FF' : 'rgba(0, 0, 0, 0.1)')};

  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 8px;
  font-size: 14px;
  cursor: pointer;
  img {
    width: 22px;
    height: 22px;
    padding-right: 6px;
  }
`;
