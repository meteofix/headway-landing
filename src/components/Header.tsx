import React, { FC } from 'react';
import logo from '../ui/images/logo.svg';
import menu from '../ui/images/header/menu.svg';
import userpic from '../ui/images/header/userpic.svg';
import * as S from '../styles/components/Header.styled';

const Header: FC = () => {
  return (
    <S.Header>
      <S.Logo src={logo} />
      <S.ButtonsWrapper>
        <S.ButtonArea>
          <img src={userpic} alt='Profile' />
        </S.ButtonArea>
        <S.ButtonArea>
          <img src={menu} alt='Menu' />
        </S.ButtonArea>
      </S.ButtonsWrapper>
    </S.Header>
  );
};

export default Header;
