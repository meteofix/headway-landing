import React, { FC } from 'react';
import useVisibility from '../../hooks/useVisibility';
import BooksMapper from '../../services/BooksMapper';
import { bookRow1, bookRow2, bookRow3 } from '../../data/elementArrays';
import { ICategoryState } from '../../interfaces/components';
import * as S from '../../styles/components/blocks/BooksWrapper.styled';

type ImageWrapperProps = {
  cat: ICategoryState;
};

const BooksWrapper: FC<ImageWrapperProps> = ({ cat }) => {
  const [isVisible, currentElement, bottom] = useVisibility(50);
  const indent = Math.round(bottom) / 6;

  return (
    <S.BooksWrapper ref={currentElement}>
      <S.BooksRow left={indent}>
        <BooksMapper array={bookRow1} cat={cat} />
        <BooksMapper array={bookRow1} cat={cat} />
        <BooksMapper array={bookRow1} cat={cat} />
      </S.BooksRow>
      <S.BooksRow left={-indent}>
        <BooksMapper array={bookRow2} cat={cat} />
        <BooksMapper array={bookRow2} cat={cat} />
        <BooksMapper array={bookRow2} cat={cat} />
      </S.BooksRow>
      <S.BooksRow left={indent}>
        <BooksMapper array={bookRow3} cat={cat} />
        <BooksMapper array={bookRow3} cat={cat} />
        <BooksMapper array={bookRow3} cat={cat} />
      </S.BooksRow>
    </S.BooksWrapper>
  );
};

export default BooksWrapper;
