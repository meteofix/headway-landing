import React, { FC } from 'react';
import Block1 from './blocks/Block1';
import Block2 from './blocks/Block2';
import Block3 from './blocks/Block3';
import Block4 from './blocks/Block4';
import Block5 from './blocks/Block5';
import Block6 from './blocks/Block6';
import Block7 from './blocks/Block7';
import * as S from '../styles/components/MainContainer.styled';

const MainContainer: FC = () => {
  return (
    <S.MainContainer>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
    </S.MainContainer>
  );
};

export default MainContainer;
