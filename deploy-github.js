const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/zz413012000/YINGREN.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);