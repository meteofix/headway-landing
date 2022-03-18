import React, { FC } from 'react';
import stars from '../../ui/images/block6/comments/stars.svg';
import instagram from '../../ui/images/block6/comments/instagram.svg';
import * as S from '../../styles/components/blocks/CommentItem.styled';

type CommentBlockProps = {
  nickname: string;
  text: string;
  avatar: string;
};

const CommentItem: FC<CommentBlockProps> = ({ nickname, text, avatar }) => {
  return (
    <S.CommentBlock>
      <S.Stars src={stars} alt='rating' />
      <S.CommentText>{text}</S.CommentText>
      <S.CommentAuthor>
        <S.Avatar src={avatar} alt={nickname + '`s avatar'} />
        <S.Nickname>{nickname}</S.Nickname>
        <S.SocialIcon src={instagram} alt={'Instagram icon'} />
      </S.CommentAuthor>
    </S.CommentBlock>
  );
};

export default CommentItem;
