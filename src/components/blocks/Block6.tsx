import React from 'react';
import { Paragraph, Title } from '../../styles/components';
import * as S from '../../styles/components/blocks/Block6.styled';
import CommentItem from './CommentItem';
import avatar01 from '../../ui/images/block6/comments/avatar_01.svg';
import avatar02 from '../../ui/images/block6/comments/avatar_02.svg';
import avatar03 from '../../ui/images/block6/comments/avatar_03.svg';
import avatar04 from '../../ui/images/block6/comments/avatar_04.svg';
import appstore from '../../ui/images/block6/rating/appstore.svg';
import appstore_stars from '../../ui/images/block6/rating/appstore_stars.svg';
import googleplay from '../../ui/images/block6/rating/googleplay.svg';
import googleplay_stars from '../../ui/images/block6/rating/googleplay_stars.svg';
import RatingItem from './RatingItem';

interface IComment {
  nickname: string;
  text: string;
  avatar: string;
}

const comments: IComment[] = [
  {
    nickname: 'mr.rageright',
    text:
      'This app simplifies books into super condensed but easy-to-digest\n' +
      '        snippets. Listened to almost all of the Art of Saying No during my warm\n' +
      '        up/stretch sesh today. A powerful tool I recommend to anyone who’s busy\n' +
      '        and can’t find time to sit down to read!',
    avatar: avatar01,
  },
  {
    nickname: 'mcogbonna',
    text: 'Headway app is one of the best investments I’ve ever made into myself outside of spiritual stuff. Summarized books that you can read or listen to!',
    avatar: avatar02,
  },
  {
    nickname: 'thefinestyler',
    text: 'In case you often find a book you just started — the Headway app is for you. It’s an audiobook reader that summarized all the key lessons in that great book you’ve been aspiring to read, but you didn’t finish.',
    avatar: avatar03,
  },
  {
    nickname: 'thisinnagirl',
    text: 'So excited for my latest app subscription for self-growth! You can set reading goals, take challenges or read offline! 🤓',
    avatar: avatar04,
  },
];

const ratings = [
  {
    rate: '4.7',
    storeIcon: appstore,
    stars: appstore_stars,
    ratingCount: '50K ratings',
    color: '#0066FF',
  },
  {
    rate: '4.2',
    storeIcon: googleplay,
    stars: googleplay_stars,
    ratingCount: '31k ratings',
    color: '#00BB77',
  },
];

const Block6 = () => {
  return (
    <S.Block6>
      <Title>People love the Headway app</Title>
      <Paragraph>
        Become a member of our global community of{' '}
        <S.BlueText>7 million people</S.BlueText>
      </Paragraph>
      <S.CommentsWrapper>
        {comments.map(({ nickname, text, avatar }) => (
          <CommentItem
            key={nickname}
            nickname={nickname}
            text={text}
            avatar={avatar}
          />
        ))}
      </S.CommentsWrapper>
      <S.RatingWrapper>
        {ratings.map((rating, index) => (
          <RatingItem
            key={index}
            rate={rating.rate}
            storeIcon={rating.storeIcon}
            stars={rating.stars}
            ratingCount={rating.ratingCount}
            color={rating.color}
          />
        ))}
      </S.RatingWrapper>
    </S.Block6>
  );
};

export default Block6;
