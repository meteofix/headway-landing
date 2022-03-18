import { CATEGORIES } from './consts';
import mountain from '../ui/images/block4/category_icons/mountain.svg';
import smile from '../ui/images/block4/category_icons/smile.svg';
import credit_card from '../ui/images/block4/category_icons/credit-card.svg';
import speaker from '../ui/images/block4/category_icons/speaker.svg';
import apple from '../ui/images/block4/category_icons/apple.svg';
import planet from '../ui/images/block4/category_icons/planet.svg';
import hourglass from '../ui/images/block4/category_icons/hourglass.svg';
import lock from '../ui/images/block4/category_icons/lock.svg';
import heart from '../ui/images/block4/category_icons/heart.svg';
import ball from '../ui/images/block4/category_icons/ball.svg';
import book01 from '../ui/images/block4/books/book_snippet_01.png';
import book02 from '../ui/images/block4/books/book_snippet_02.png';
import book03 from '../ui/images/block4/books/book_snippet_03.png';
import book04 from '../ui/images/block4/books/book_snippet_04.png';
import book05 from '../ui/images/block4/books/book_snippet_05.png';
import book12 from '../ui/images/block4/books/book_snippet_12.png';
import book13 from '../ui/images/block4/books/book_snippet_13.png';
import book14 from '../ui/images/block4/books/book_snippet_14.png';
import book15 from '../ui/images/block4/books/book_snippet_15.png';
import book16 from '../ui/images/block4/books/book_snippet_16.png';
import book06 from '../ui/images/block4/books/book_snippet_06.png';
import book07 from '../ui/images/block4/books/book_snippet_07.png';
import book08 from '../ui/images/block4/books/book_snippet_08.png';
import book09 from '../ui/images/block4/books/book_snippet_09.png';
import book10 from '../ui/images/block4/books/book_snippet_10.png';
import book11 from '../ui/images/block4/books/book_snippet_11.png';
import avatar01 from '../ui/images/block6/comments/avatar_01.png';
import avatar02 from '../ui/images/block6/comments/avatar_02.png';
import avatar03 from '../ui/images/block6/comments/avatar_03.png';
import avatar04 from '../ui/images/block6/comments/avatar_04.png';
import appstore from '../ui/images/block6/rating/appstore.svg';
import appstore_stars from '../ui/images/block6/rating/appstore_stars.svg';
import googleplay from '../ui/images/block6/rating/googleplay.svg';
import googleplay_stars from '../ui/images/block6/rating/googleplay_stars.svg';
import { IBook, ICategory, IComment, IRating } from '../interfaces/components';

export const categoryRow1: ICategory[] = [
  {
    id: 1,
    name: CATEGORIES.ALL_CATEGORIES,
    icon: '',
  },
  {
    id: 2,
    name: CATEGORIES.SELF_GROWTH,
    icon: mountain,
  },
  {
    id: 3,
    name: CATEGORIES.HAPPINESS,
    icon: smile,
  },
  {
    id: 4,
    name: CATEGORIES.MONEY_AND_INVESTMENT,
    icon: credit_card,
  },
  {
    id: 5,
    name: CATEGORIES.NEGOTIATION,
    icon: speaker,
  },
  {
    id: 6,
    name: CATEGORIES.HEALTH,
    icon: apple,
  },
];

export const categoryRow2: ICategory[] = [
  {
    id: 7,
    name: CATEGORIES.SPIRITUALITY,
    icon: planet,
  },
  {
    id: 8,
    name: CATEGORIES.PRODUCTIVITY,
    icon: hourglass,
  },
  {
    id: 9,
    name: CATEGORIES.BUSINESS_AND_CAREER,
    icon: lock,
  },
  {
    id: 10,
    name: CATEGORIES.LOVE_AND_SEX,
    icon: heart,
  },
  {
    id: 11,
    name: CATEGORIES.SPORTS_AND_FITNESS,
    icon: ball,
  },
];

export const bookRow1: IBook[] = [
  {
    id: 1,
    image: book01,
    alt: 'book 1',
    category: CATEGORIES.HAPPINESS,
  },
  {
    id: 2,
    image: book02,
    alt: 'book 2',
    category: CATEGORIES.SELF_GROWTH,
  },
  {
    id: 3,
    image: book03,
    alt: 'book 3',
    category: CATEGORIES.NEGOTIATION,
  },
  {
    id: 4,
    image: book04,
    alt: 'book 4',
    category: CATEGORIES.MONEY_AND_INVESTMENT,
  },
  {
    id: 5,
    image: book05,
    alt: 'book 5',
    category: CATEGORIES.SPIRITUALITY,
  },
];

export const bookRow2: IBook[] = [
  {
    id: 6,
    image: book06,
    alt: 'book 6',
    category: CATEGORIES.HEALTH,
  },
  {
    id: 7,
    image: book07,
    alt: 'book 7',
    category: CATEGORIES.PRODUCTIVITY,
  },
  {
    id: 8,
    image: book08,
    alt: 'book 8',
    category: CATEGORIES.HEALTH,
  },
  {
    id: 9,
    image: book09,
    alt: 'book 9',
    category: CATEGORIES.LOVE_AND_SEX,
  },
  {
    id: 10,
    image: book10,
    alt: 'book 10',
    category: CATEGORIES.BUSINESS_AND_CAREER,
  },
  {
    id: 11,
    image: book11,
    alt: 'book 11',
    category: CATEGORIES.SPORTS_AND_FITNESS,
  },
];

export const bookRow3: IBook[] = [
  {
    id: 12,
    image: book12,
    alt: 'book 12',
    category: CATEGORIES.MONEY_AND_INVESTMENT,
  },
  {
    id: 13,
    image: book13,
    alt: 'book 13',
    category: CATEGORIES.HAPPINESS,
  },
  {
    id: 14,
    image: book14,
    alt: 'book 14',
    category: CATEGORIES.LOVE_AND_SEX,
  },
  {
    id: 15,
    image: book15,
    alt: 'book 15',
    category: CATEGORIES.PRODUCTIVITY,
  },
  {
    id: 16,
    image: book16,
    alt: 'book 16',
    category: CATEGORIES.SELF_GROWTH,
  },
];

export const comments: IComment[] = [
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

export const ratings: IRating[] = [
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
