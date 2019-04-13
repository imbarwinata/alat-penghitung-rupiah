## Aplikasi Alat Penghitung Nominal Rupiah

Aplikasi Alat Penghitung Nominal Rupiah

### Table of contents

[Installation](#installation)

[Configuration](#configuration)

### Installation

1- Clone the boilerplate repo

`git clone git@github.com:imbarwinata/alat-penghitung-rupiah.git`

2- `npm install` to install npm packages

3- start dev server using `npm start`.

3- build and start for production `npm run start:production`.

4- Unit testing will watch all your changes in the test files as well as create coverage folder for you.
`npm run test`

### Configuration

- Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
- `webpack/webpack.common.js` config common webpack for both dev and production environments.
- webpack/webpack.dev.js config webpack for dev environment.
- `webpack/webpack.prod.js` config webpack for production environment.
- `/webpack.config.js` main webpack config that merge common and webpack environment based config.
- Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
- Prettier config `/.prettierc`.
- Browsers list config `/.browserslistrc`.
