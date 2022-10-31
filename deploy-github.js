const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/zz413012000/Fanhole.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);