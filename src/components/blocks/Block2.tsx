import React, { FC } from 'react';
import { Paragraph, SubTitle, Title } from '../../styles/components';
import { BLOCK2 } from '../../data/content';
import * as S from '../../styles/components/blocks/Block2.styled';

const Block2: FC = () => {
  return (
    <S.Block2>
      <Title>{BLOCK2.TITLE}</Title>
      <S.Reviewers>
        <S.ImageNYT src={BLOCK2.IMAGE_NYT.SRC} alt={BLOCK2.IMAGE_NYT.ALT} />
        <S.ImageHBR src={BLOCK2.IMAGE_HBR.SRC} alt={BLOCK2.IMAGE_HBR.ALT} />
        <S.ImageAMAZON
          src={BLOCK2.IMAGE_AMAZON.SRC}
          alt={BLOCK2.IMAGE_AMAZON.ALT}
        />
      </S.Reviewers>
      <SubTitle>{BLOCK2.SUBTITLE_1}</SubTitle>
      <Paragraph>{BLOCK2.TEXT_1}</Paragraph>
      <S.Image04 src={BLOCK2.IMAGE_4.SRC} alt={BLOCK2.IMAGE_4.ALT} />
      <SubTitle>{BLOCK2.SUBTITLE_2}</SubTitle>
      <Paragraph>{BLOCK2.TEXT_2}</Paragraph>
      <S.Image04 src={BLOCK2.IMAGE_5.SRC} alt={BLOCK2.IMAGE_5.ALT} />
      <SubTitle>{BLOCK2.SUBTITLE_3}</SubTitle>
      <Paragraph>{BLOCK2.TEXT_3}</Paragraph>
    </S.Block2>
  );
};

export default Block2;
