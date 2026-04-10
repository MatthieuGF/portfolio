import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projets',
    pathname: '/#project-1',
  },
  {
    label: 'Infos',
    pathname: '/#details',
  },
  {
    label: 'Stages',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://www.linkedin.com/in/matthieu-geiger-fonval-028922226/`,
    icon: 'bluesky',
  },
  {
    label: 'Figma',
    url: `https://github.com/MatthieuGF`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
