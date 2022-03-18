import React, { FC } from 'react';
import { Paragraph, Title } from '../../styles/components';
import { BUTTON_TITLE } from '../../data/consts';
import { BLOCK1 } from '../../data/content';
import Lottie from 'lottie-react';
import * as S from '../../styles/components/blocks/Block1.styled';

const Block1: FC = () => {
  return (
    <S.Block1>
      <Title>{BLOCK1.TITLE}</Title>
      <Paragraph>{BLOCK1.TEXT_1}</Paragraph>
      <S.StyledLottie>
        <Lottie
          alt={BLOCK1.ANIMATION_1.ALT}
          animationData={BLOCK1.ANIMATION_1.SRC}
        />
      </S.StyledLottie>
      <S.ButtonOnlyDesktop>{BUTTON_TITLE}</S.ButtonOnlyDesktop>
      <S.Image1 src={BLOCK1.IMAGE_1.SRC} alt={BLOCK1.IMAGE_1.ALT} />
    </S.Block1>
  );
};

export default Block1;
