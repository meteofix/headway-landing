import React, { FC } from 'react';
import { CATEGORIES } from '../data/consts';
import { IBook, ICategoryState } from '../interfaces/components';
import * as S from '../styles/components/blocks/BooksWrapper.styled';

type BooksMapperProps = {
  array: IBook[];
  cat: ICategoryState;
};

const BooksMapper: FC<BooksMapperProps> = ({ array, cat }) => {
  return (
    <>
      {array.map(({ id, image, alt, category }) => (
        <S.Book
          key={id}
          src={image}
          alt={alt}
          active={cat[CATEGORIES.ALL_CATEGORIES] || cat[category]}
        />
      ))}
    </>
  );
};

export default BooksMapper;
