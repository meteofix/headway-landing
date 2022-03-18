import React, { FC } from 'react';
import { Paragraph, Title } from '../../styles/components';
import { BLOCK6 } from '../../data/content';
import CommentsMapper from '../../services/CommentsMapper';
import { comments, ratings } from '../../data/elementArrays';
import RatingsMapper from '../../services/RatingsMapper';
import * as S from '../../styles/components/blocks/Block6.styled';

const Block6: FC = () => {
  return (
    <S.Block6>
      <Title>{BLOCK6.TITLE}</Title>
      <Paragraph>
        {BLOCK6.TEXT_1}
        <S.BlueText>{BLOCK6.TEXT_1_ENDING}</S.BlueText>
      </Paragraph>
      <S.CommentsWrapper>
        <CommentsMapper array={comments} />
      </S.CommentsWrapper>
      <S.RatingWrapper>
        <RatingsMapper array={ratings} />
      </S.RatingWrapper>
    </S.Block6>
  );
};

export default Block6;
