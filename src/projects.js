import placeholder from './placeholder.gif';
import warblerCover from './Warbler-cover.png';
import warblerGIF from './Warbler.gif';
import theRelishCover from './TheRelish-cover.png';
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
  {img: theRelishCover,
    title: 'The Relish - CMS',
    description: 'Job search in one plac',
    id: 2,
    deployedURL:'',
    github:'',
    tech: 'React, Redux, Firebase',
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