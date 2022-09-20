// gitprofile.config.js

const config = {
  github: {
    username: 'oghenekaroisrael', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['CollabSession', 'Test', 'Assessment', 'exam'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'oghenekaroisraelbrume',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: '',
    phone: '',
    email: 'oghenekaroisrael@gmail.com, israelbrume06@gmail.com',
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Go',
    'React Native',
    'Express.js',
    'HTML',
    'CSS',
    'Typescript',
    'Redux',
    'PostgreSQL',
    'MS SQL Server',
    'MongoDB',
    'Amazon Web Services',
    'Google Cloud Platform',
    'FireBase',
    'RabbitMQ',
    'Linux',
    'Unix',
    'Bash',
    'CI/CD',
    'Jira',
    'Notion',
    'Figma',
  ],
  experiences: [
    {
      company: 'Intellimed Media',
      position: 'Junior Developer Team Lead',
      from: 'July 2021',
      to: 'Present',
    },
    {
      company: 'Qucoon Limited (Lagos, Nigeria)',
      position: 'Intern',
      from: 'January 2021',
      to: 'June 2021',
    },
    {
      company: 'Greenhouse Multimedia (Delta, Nigeria)',
      position: 'Fullstack Engineer',
      from: 'August 2018',
      to: 'August 2020',
    },
  ],
  education: [
    {
      institution: 'Babcock Univerisity',
      degree: 'Bachelor of Science',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'Delta State Polytechnic Otefe Oghara',
      degree: 'National Diploma',
      from: '2015',
      to: '2017',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark', 'night'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
