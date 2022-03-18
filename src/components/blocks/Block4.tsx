import React, { FC, useState } from 'react';
import { Paragraph, Title } from '../../styles/components';
import BooksWrapper from './BooksWrapper';
import CategoriesMapper from '../../services/CategoriesMapper';
import { CATEGORIES } from '../../data/consts';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { categoryRow1, categoryRow2 } from '../../data/elementArrays';
import { BLOCK4 } from '../../data/content';
import { ICategoryState } from '../../interfaces/components';
import * as S from '../../styles/components/blocks/Block4.styled';

const initialCat: { [name: string]: boolean } = {};
for (const categoriesKey in CATEGORIES) {
  initialCat[categoriesKey] = false;
}
initialCat[CATEGORIES.ALL_CATEGORIES] = true;

const Block4: FC = () => {
  const scrollRef = useHorizontalScroll();
  const [categoryState, setCategoryState] =
    useState<ICategoryState>(initialCat);

  const catStateHandler = (name: string): void => {
    if (name !== CATEGORIES.ALL_CATEGORIES) {
      setCategoryState((prevState) => {
        return {
          ...prevState,
          [CATEGORIES.ALL_CATEGORIES]: false,
          [name]: !prevState[name],
        };
      });
    } else {
      setCategoryState({
        ...initialCat,
        [CATEGORIES.ALL_CATEGORIES]: true,
      });
    }
  };

  return (
    <S.Block4>
      <Title>{BLOCK4.TITLE}</Title>
      <Paragraph>{BLOCK4.TEXT_1}</Paragraph>
      <S.CategoriesWrapper ref={scrollRef}>
        <S.CategoryRow>
          <CategoriesMapper
            array={categoryRow1}
            cat={categoryState}
            handler={catStateHandler}
          />
        </S.CategoryRow>
        <S.CategoryRow>
          <CategoriesMapper
            array={categoryRow2}
            cat={categoryState}
            handler={catStateHandler}
          />
        </S.CategoryRow>
      </S.CategoriesWrapper>
      <BooksWrapper cat={categoryState} />
    </S.Block4>
  );
};

export default Block4;
