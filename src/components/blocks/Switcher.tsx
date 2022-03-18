import React, { FC } from 'react';
import audio from '../../ui/images/block5/audio.svg';
import audio_black from '../../ui/images/block5/audio_black.svg';
import text from '../../ui/images/block5/text.svg';
import text_black from '../../ui/images/block5/text_black.svg';
import * as S from '../../styles/components/blocks/Switcher.styled';

type SwitcherProps = {
  state: boolean;
  handler: () => void;
};

const Switcher: FC<SwitcherProps> = ({ state, handler }) => {
  return (
    <S.SwitchLabel>
      <input checked={state} onChange={() => handler()} type='checkbox' />
      <S.Slider />
      {!state && <S.AudioIcon src={audio} />}
      {state && <S.AudioIcon src={audio_black} />}
      {!state && <S.TextIcon src={text_black} />}
      {state && <S.TextIcon src={text} />}
    </S.SwitchLabel>
  );
};

export default Switcher;
