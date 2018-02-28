const fsextra = require('fs-extra');
const { exec } = require('child_process');

fsextra.copy('./src/app/ng-cesium', './dist-lib', err => {
  if (err) return console.error(err);
  console.log('Copied files');
  createDeclarations();
});

function createDeclarations() {
  exec('cd dist-lib && tsc index.ts --declaration', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}

function createPackageJson() {
  const packageJSON = {
    name: 'ng-cesium',
    version: '0.0.1',
    description: '基于Angular的cesium三维组件.',
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1'
    },
    repository: {
      type: 'git',
      url: 'git+https://github.com/PLCreed/ng-cesium'
    },
    keywords: ['Angular', 'cesium'],
    author: {
      name: 'GuoBin',
      email: '731174410@qq.com'
    },
    license: 'MIT',
    bugs: {
      url: 'https://github.com/PLCreed/ng-cesium/issues'
    },
    homepage: 'https://github.com/PLCreed/ng-cesium#readme',
    types: 'index.d.ts'
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, { spaces: 2 }, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
  });
}
