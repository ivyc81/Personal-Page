import placeholder from './placeholder.gif';
import warblerCover from './Warbler-cover.png';
import warblerGIF from './Warbler.gif';
import joblyCover from './Jobly-cover.png';
import microblogCover from './Microblog-cover.png';

export const projects = {
  1:
  {img: warblerCover,
   title: 'Warbler',
   description: 'A twitter mock',
   id: 1,
   deployedURL:'https://warbler-less.herokuapp.com/',
   github:'https://github.com/ivyc81/Warbler',
   tech: 'Python, Flask',
   gif: warblerGIF,
  },
  2:
  {img: joblyCover,
    title: 'Jobly-frontend',
    description: 'Job search in one place',
    id: 2,
    deployedURL:'https://jobly-more.herokuapp.com/',
    github:'https://github.com/ivyc81/react-jobly',
    tech: 'placeholder',
    gif: placeholder,
  },
  3:
  {img: microblogCover,
    title: 'Microblog',
    description: 'React-Redux',
    id: 3,
    deployedURL:'',
    github:'https://github.com/ivyc81/redux-microblog',
    tech: 'Javascript, React, Redux',
    gif: placeholder,
  },
};