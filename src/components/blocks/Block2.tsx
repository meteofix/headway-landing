import React, { FC } from 'react';
import { Paragraph, SubTitle, Title } from '../../styles/components';
import NYT from '../../ui/images/block2/image_201_NYT.svg';
import AMAZON from '../../ui/images/block2/image_203_AMAZON.svg';
import HBR from '../../ui/images/block2/image_202_HBR.svg';
import image_204 from '../../ui/images/block2/image_204.svg';
import image_205 from '../../ui/images/block2/image_205.svg';
import * as S from '../../styles/components/blocks/Block2.styled';

const Block2: FC = () => {
  return (
    <S.Block2>
      <Title>Get smarter with the least effort</Title>

      <S.Reviewers>
        <S.ImageNYT src={NYT} />
        <S.ImageHBR src={HBR} />
        <S.ImageAMAZON src={AMAZON} />
      </S.Reviewers>
      <SubTitle>Learn from the best</SubTitle>
      <Paragraph>
        Highlighted by top reviewers, we picked only the most outstanding
        bestsellers for you.
      </Paragraph>
      <S.Image04 src={image_204} />
      <SubTitle>Get key insights</SubTitle>
      <Paragraph>
        Major ideas in a bite-sized form. Long reads no more!
      </Paragraph>
      <S.Image05 src={image_205} />
      <SubTitle>Build a reading habit</SubTitle>
      <Paragraph>
        Consistency is the key to top performance. Only 15 minutes per day to
        make reading your brand new habit!
      </Paragraph>
    </S.Block2>
  );
};

export default Block2;
