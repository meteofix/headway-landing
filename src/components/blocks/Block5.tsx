import React, { useState } from 'react';
import { Paragraph, Title } from '../../styles/components';
import * as S from '../../styles/components/blocks/Block5.styled';
import image_501 from '../../ui/images/block5/image_501.svg';
import image_502 from '../../ui/images/block5/image_502.svg';

const Block5 = () => {
  const [listen, setListen] = useState<boolean>(true);
  const listenOrReadHandler = () => {
    if (listen) setListen(false);
    else setListen(true);
  };
  return (
    <S.Block5>
      <Title>Read or Listen</Title>
      <Paragraph>
        Commuting, jogging, or stuck in line? Enjoy the best books in a
        condensed format. Summaries have an audio version, narrated by
        professional voice actors.
      </Paragraph>
      <br />
      <div onClick={() => listenOrReadHandler()}>Tongler</div>
      <br />
      <S.Image src={listen ? image_501 : image_502} />
    </S.Block5>
  );
};

export default Block5;
