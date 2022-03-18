import animation from '../ui/lottie_animation_01.json';
import image1 from '../ui/images/block1/image_101.svg';
import NYT from '../ui/images/block2/image_201_NYT.svg';
import HBR from '../ui/images/block2/image_202_HBR.svg';
import AMAZON from '../ui/images/block2/image_203_AMAZON.svg';
import image_204 from '../ui/images/block2/image_204.svg';
import image_205 from '../ui/images/block2/image_205.svg';
import image_301 from '../ui/images/block3/image_301.svg';
import vector_301 from '../ui/images/block3/vector_301.svg';
import vector_302 from '../ui/images/block3/vector_302.svg';
import image_302 from '../ui/images/block3/image_302.svg';
import image_501 from '../ui/images/block5/image_501.svg';
import image_502 from '../ui/images/block5/image_502.svg';
import logo from '../ui/images/logo.svg';
import facebook from '../ui/images/block7/facebook.svg';
import instagram from '../ui/images/block7/instagram.svg';
import twitter from '../ui/images/block7/twitter.svg';

export const BLOCK1 = {
  TITLE: 'Become a better you',
  TEXT_1:
    'with 15-min bite-sized reads and audios of the world’s best nonfiction\n' +
    '        books',
  ANIMATION_1: { SRC: animation, ALT: 'Read statistics graphic' },
  IMAGE_1: {
    SRC: image1,
    ALT: 'Headway interface',
  },
};

export const BLOCK2 = {
  TITLE: 'Get smarter with the least effort',
  IMAGE_NYT: {
    SRC: NYT,
    ALT: 'The New York Times Best Seller',
  },
  IMAGE_HBR: {
    SRC: HBR,
    ALT: 'Harvard Business Review',
  },
  IMAGE_AMAZON: {
    SRC: AMAZON,
    ALT: 'Amazon Best Seller',
  },
  SUBTITLE_1: 'Learn from the best',
  TEXT_1:
    'Highlighted by top reviewers, we picked only the most outstanding\n' +
    '        bestsellers for you.',
  IMAGE_4: {
    SRC: image_204,
    ALT: 'Summaries',
  },
  SUBTITLE_2: 'Get key insights',
  TEXT_2: 'Major ideas in a bite-sized form. Long reads no more!',
  IMAGE_5: {
    SRC: image_205,
    ALT: 'Reading habit',
  },
  SUBTITLE_3: 'Build a reading habit',
  TEXT_3:
    'Consistency is the key to top performance. Only 15 minutes per day to\n' +
    '        make reading your brand new habit!',
};

export const BLOCK3 = {
  TITLE: 'Summary is the new black',
  TEXT_1:
    'Use summaries: comprehensive 15-min abstracts from nonfiction books with\n' +
    '        the main concepts and recommendations.',
  ANIMATION_1: { SRC: animation, ALT: 'Read statistics graphic' },
  IMAGE_1: {
    SRC: image_301,
    ALT: 'Book`s resume',
  },
  TEXT_2: 'Typical book',
  TEXT_2_SECONDARY: '320 pages ~ 20 hours',
  IMAGE_ARROW_1: {
    SRC: vector_301,
    ALT: 'Vertical arrow',
  },
  TEXT_3: 'Key ideas & insights',
  IMAGE_ARROW_2: {
    SRC: vector_302,
    ALT: 'Vertical arrow',
  },
  IMAGE_2: {
    SRC: image_302,
    ALT: 'Book`s resume (phone)',
  },
  TEXT_4: 'Summary',
  TEXT_4_SECONDARY: '~ 15 minutes',
};

export const BLOCK4 = {
  TITLE: 'Determine your goal and go ahead!',
  TEXT_1:
    'Learn something new every day from Self-Growth, Happiness, Money,\n' +
    '        Health, and many other categories. Benefit from unlimited access to\n' +
    '        world best thoughts.',
};

export const BLOCK5 = {
  TITLE: 'Read or Listen',
  TEXT_1:
    'Commuting, jogging, or stuck in line? Enjoy the best books in a\n' +
    '        condensed format. Summaries have an audio version, narrated by\n' +
    '        professional voice actors.',
  IMAGE_1: {
    SRC: image_501,
    ALT: 'Audiobook listening interface',
  },
  IMAGE_2: {
    SRC: image_502,
    ALT: 'Book reading interface',
  },
};

export const BLOCK6 = {
  TITLE: 'People love the Headway app',
  TEXT_1: 'Become a member of our global community of',
  TEXT_1_ENDING: ' 7 million people',
  IMAGE_1: {
    SRC: image_501,
    ALT: 'Audiobook listening interface',
  },
  IMAGE_2: {
    SRC: image_502,
    ALT: 'Book reading interface',
  },
};

export const BLOCK7 = {
  IMAGE_LOGO: {
    SRC: logo,
    ALT: 'Headway logotype',
  },
  TITLE: 'Empower yourself with the best books insights',
  TEXT_1: 'Social media:',
  IMAGE_FACEBOOK: {
    SRC: facebook,
    ALT: 'Facebook icon',
  },
  IMAGE_INSTAGRAM: {
    SRC: instagram,
    ALT: 'Instagram icon',
  },
  IMAGE_TWITTER: {
    SRC: twitter,
    ALT: 'Twitter icon',
  },
};
