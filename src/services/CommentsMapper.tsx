import React, { FC } from 'react';
import CommentItem from '../components/blocks/CommentItem';
import { IComment } from '../interfaces/components';

type CommentsMapperProps = {
  array: IComment[];
};

const CommentsMapper: FC<CommentsMapperProps> = ({ array }) => {
  return (
    <>
      {array.map(({ nickname, text, avatar }) => (
        <CommentItem
          key={nickname}
          nickname={nickname}
          text={text}
          avatar={avatar}
        />
      ))}
    </>
  );
};

export default CommentsMapper;
