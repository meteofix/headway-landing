import React from 'react';
import animation from '../../ui/lottie_animation_01.json';
import image1 from '../../ui/images/block1/image_101.svg';
import { Paragraph, Title } from '../../styles/components';
import * as S from '../../styles/components/blocks/Block1.styled';

const Block1 = () => {
  return (
    <S.Block1>
      <Title>Become a better you</Title>
      <Paragraph>
        with 15-min bite-sized reads and audios of the world’s best nonfiction
        books
      </Paragraph>
      <S.StyledLottie animationData={animation} />
      <img src={image1} alt='image 1' />
    </S.Block1>
  );
};

export default Block1;
