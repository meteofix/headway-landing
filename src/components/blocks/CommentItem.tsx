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
      <img src={stars} />
      <S.CommentText>{text}</S.CommentText>
      <S.CommentAuthor>
        <S.Avatar src={avatar} />
        <S.Nickname>{nickname}</S.Nickname>
        <S.SocialIcon src={instagram} />
      </S.CommentAuthor>
    </S.CommentBlock>
  );
};

export default CommentItem;
