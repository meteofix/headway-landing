import styled from 'styled-components';

export const BooksWrapper = styled.div`
  margin-top: 8px;
`;

export const BooksRow = styled.div.attrs<{ left: number }>(({ left }) => ({
  style: {
    transform: 'translateX(' + left + 'px)',
  },
}))<{ left: number }>`
  min-width: 100%;
  display: flex;
  overflow-x: auto;
`;

export const Book = styled.img<{ active: boolean }>`
  width: 72px;
  height: 109px;
  margin: 8px;
  cursor: pointer;
  filter: ${({ active }) => (active ? 'grayscale(0)' : 'gray')};
  filter: ${({ active }) => (active ? 'grayscale(0)' : 'grayscale(1)')};
`;
