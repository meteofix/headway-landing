import React, { FC, useState } from 'react';
import { Paragraph, Title } from '../../styles/components';
import { BLOCK5 } from '../../data/content';
import Switcher from './Switcher';
import * as S from '../../styles/components/blocks/Block5.styled';

const Block5: FC = () => {
  const [readMode, setReadMode] = useState<boolean>(false);

  const listenOrReadHandler = () => {
    if (readMode) setReadMode(false);
    else setReadMode(true);
  };

  return (
    <S.Block5>
      <Title>{BLOCK5.TITLE}</Title>
      <Paragraph>{BLOCK5.TEXT_1}</Paragraph>
      <Switcher state={readMode} handler={listenOrReadHandler} />
      <S.Image
        src={readMode ? BLOCK5.IMAGE_2.SRC : BLOCK5.IMAGE_1.SRC}
        alt={readMode ? BLOCK5.IMAGE_2.ALT : BLOCK5.IMAGE_1.ALT}
      />
    </S.Block5>
  );
};

export default Block5;
