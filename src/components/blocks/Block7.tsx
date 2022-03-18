import React, { FC } from 'react';
import { Title } from '../../styles/components';
import { BLOCK7 } from '../../data/content';
import * as S from '../../styles/components/blocks/Block7.styled';

const Block7: FC = () => {
  return (
    <S.Block7>
      <S.LogoImage src={BLOCK7.IMAGE_LOGO.SRC} alt={BLOCK7.IMAGE_LOGO.ALT} />
      <Title>{BLOCK7.TITLE}</Title>
      <S.SocialTitle>{BLOCK7.TEXT_1}</S.SocialTitle>
      <S.SocialIcons>
        <S.Icon
          src={BLOCK7.IMAGE_FACEBOOK.SRC}
          alt={BLOCK7.IMAGE_FACEBOOK.ALT}
        />
        <S.Icon
          src={BLOCK7.IMAGE_INSTAGRAM.SRC}
          alt={BLOCK7.IMAGE_INSTAGRAM.ALT}
        />
        <S.Icon src={BLOCK7.IMAGE_TWITTER.SRC} alt={BLOCK7.IMAGE_LOGO.ALT} />
      </S.SocialIcons>
    </S.Block7>
  );
};

export default Block7;
