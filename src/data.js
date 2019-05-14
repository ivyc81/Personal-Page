// Projects
import placeholder from './placeholder.gif';
import warblerCover from './Warbler-cover.png';
import warblerGIF from './Warbler.gif';
import theRelishCover from './TheRelish-cover.png';
import theRelishGIF from './TheRelish.gif';
import microblogCover from './Microblog-cover.png';
import microblogGIF from './Microblog.gif';

// About me
import profilePhoto from './profile.png';
import resume from './resume.pdf';


// Projects
export const projects = {
  1:
  {img: theRelishCover,
    title: 'The Relish - CMS',
    description: 'We worked on the CMS system to improve load time.',
    id: 1,
    deployedURL:'',
    github:'',
    tech: 'React, Redux, Firebase',
    gif: theRelishGIF,
  },
  2:
  {img: warblerCover,
   title: 'Warbler',
   description: 'A twitter mock',
   id: 2,
   deployedURL:'https://warbler-less.herokuapp.com/',
   github:'https://github.com/ivyc81/Warbler',
   tech: 'Python, Flask',
   gif: warblerGIF,
  },
  3:
  {img: microblogCover,
    title: 'Microblog',
    description: 'An app that allows user to post articles and rate articles. The posts is sorted according to votes and changes position accordingly.',
    id: 3,
    deployedURL:'https://microblog-less.herokuapp.com/',
    github:'https://github.com/ivyc81/redux-microblog',
    tech: 'Javascript, React, Redux',
    gif: microblogGIF,
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