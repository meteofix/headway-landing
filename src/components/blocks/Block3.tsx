import React, { FC } from 'react';
import { Paragraph, ParagraphSecondary, Title } from '../../styles/components';
import { BLOCK3 } from '../../data/content';
import * as S from '../../styles/components/blocks/Block3.styled';

const Block3: FC = () => {
  return (
    <S.Block3>
      <Title>{BLOCK3.TITLE}</Title>
      <Paragraph>{BLOCK3.TEXT_1}</Paragraph>
      <S.Image01 src={BLOCK3.IMAGE_1.SRC} alt={BLOCK3.IMAGE_1.ALT} />
      <Paragraph>{BLOCK3.TEXT_2}</Paragraph>
      <ParagraphSecondary>{BLOCK3.TEXT_2_SECONDARY}</ParagraphSecondary>
      <S.ImageArrow
        src={BLOCK3.IMAGE_ARROW_1.SRC}
        alt={BLOCK3.IMAGE_ARROW_1.ALT}
      />
      <Paragraph>{BLOCK3.TEXT_3}</Paragraph>
      <S.ImageArrow
        src={BLOCK3.IMAGE_ARROW_2.SRC}
        alt={BLOCK3.IMAGE_ARROW_2.ALT}
      />
      <S.Image02 src={BLOCK3.IMAGE_2.SRC} alt={BLOCK3.IMAGE_2.ALT} />
      <Paragraph>{BLOCK3.TEXT_4}</Paragraph>
      <ParagraphSecondary>{BLOCK3.TEXT_4_SECONDARY}</ParagraphSecondary>
    </S.Block3>
  );
};

export default Block3;
