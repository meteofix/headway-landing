import React, { FC } from 'react';
import * as S from '../../styles/components/blocks/RatingItem.styled';

type RatingItemProps = {
  rate: string;
  storeIcon: string;
  stars: string;
  ratingCount: string;
  color: string;
};

const RatingItem: FC<RatingItemProps> = ({
  rate,
  storeIcon,
  stars,
  ratingCount,
  color,
}) => {
  return (
    <S.RatingItem>
      <S.RatingRow>
        <S.Rate color={color}>{rate}</S.Rate>
        <img src={storeIcon} />
      </S.RatingRow>
      <img src={stars} />
      <S.Count>{ratingCount}</S.Count>
    </S.RatingItem>
  );
};

export default RatingItem;
