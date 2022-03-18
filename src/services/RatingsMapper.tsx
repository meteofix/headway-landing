import React, { FC } from 'react';
import RatingItem from '../components/blocks/RatingItem';
import { IRating } from '../interfaces/components';

type RatingsMapperProps = {
  array: IRating[];
};

const RatingsMapper: FC<RatingsMapperProps> = ({ array }) => {
  return (
    <>
      {array.map((rating, index) => (
        <RatingItem
          key={index}
          rate={rating.rate}
          storeIcon={rating.storeIcon}
          stars={rating.stars}
          ratingCount={rating.ratingCount}
          color={rating.color}
        />
      ))}
    </>
  );
};

export default RatingsMapper;
