import React from 'react';
import { Title } from '../../styles/components';
import * as S from '../../styles/components/blocks/Block7.styled';
import logo from '../../ui/images/logo.svg';
import instagram from '../../ui/images/block7/instagram.svg';
import facebook from '../../ui/images/block7/facebook.svg';
import twitter from '../../ui/images/block7/twitter.svg';

const Block7 = () => {
  return (
    <S.Block7>
      <S.LogoImage src={logo} />
      <Title>Empower yourself with the best books insights</Title>
      <S.SocialTitle>Social media:</S.SocialTitle>
      <S.SocialIcons>
        <S.Icon src={facebook} />
        <S.Icon src={instagram} />
        <S.Icon src={twitter} />
      </S.SocialIcons>
    </S.Block7>
  );
};

export default Block7;
