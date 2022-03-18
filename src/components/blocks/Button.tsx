import React, { FC } from 'react';
import { Paragraph } from '../../styles/components';
import * as S from '../../styles/components/blocks/Button.styled';

const Button: FC = ({ children }) => {
  return (
    <S.Button>
      <Paragraph>{children}</Paragraph>
    </S.Button>
  );
};

export default Button;
