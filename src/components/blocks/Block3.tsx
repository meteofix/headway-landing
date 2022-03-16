import React from 'react';
import { Paragraph, ParagraphSecondary, Title } from '../../styles/components';
import * as S from '../../styles/components/blocks/Block3.styled';
import image_301 from '../../ui/images/block3/image_301.svg';
import image_302 from '../../ui/images/block3/image_302.svg';
import vector_301 from '../../ui/images/block3/vector_301.svg';
import vector_302 from '../../ui/images/block3/vector_302.svg';

const Block3 = () => {
  return (
    <S.Block3>
      <Title>Summary is the new black</Title>
      <Paragraph>
        Use summaries: comprehensive 15-min abstracts from nonfiction books with
        the main concepts and recommendations.
      </Paragraph>
      <S.Image01 src={image_301} />
      <Paragraph>Typical book</Paragraph>
      <ParagraphSecondary>320 pages ~ 20 hours</ParagraphSecondary>
      <S.ImageArrow src={vector_301} />
      <Paragraph>Key ideas & insights</Paragraph>
      <S.ImageArrow src={vector_302} />
      <S.Image02 src={image_302} />
      <Paragraph>Summary</Paragraph>
      <ParagraphSecondary>~ 15 minutes</ParagraphSecondary>
    </S.Block3>
  );
};

export default Block3;
