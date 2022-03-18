import React, { FC } from 'react';
import Button from './blocks/Button';
import { BUTTON_TITLE } from '../data/consts';
import * as S from '../styles/components/Footer.styled';

const Footer: FC = () => {
  return (
    <S.Footer>
      <Button>{BUTTON_TITLE}</Button>
    </S.Footer>
  );
};

export default Footer;
