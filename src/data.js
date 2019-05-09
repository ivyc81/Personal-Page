// Projects
import placeholder from './placeholder.gif';
import warblerCover from './Warbler-cover.png';
import warblerGIF from './Warbler.gif';
import theRelishCover from './TheRelish-cover.png';
import theRelishGIF from './TheRelish.gif';
import microblogCover from './Microblog-cover.png';

// About me
import profilePhoto from './profile.png';
import resume from './resume.pdf';


// Projects
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
    description: 'The app where fans go to talk sports',
    id: 2,
    deployedURL:'',
    github:'',
    tech: 'React, Redux, Firebase',
    gif: theRelishGIF,
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


// About Me
const EMAIL = 'ivyc8192@gmail.com';
const GITHUB_URL = 'https://github.com/ivyc81';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ivyc8192/';

export const aboutMe = {
  profilePhoto,
  resume,
  email: EMAIL,
  gitHub: GITHUB_URL,
  linkedIn: LINKEDIN_URL,
  bioTitle: 'I am a web developer based in San Francisco.',
  bio: ['I love coding, problem solving and good food.'],
};