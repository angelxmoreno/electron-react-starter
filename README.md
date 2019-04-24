# Electron-React-Starter
This project was inspired from the following blog posts

- [How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)
- [Using Electron with React: The Basics](https://medium.com/@brockhoff/using-electron-with-react-the-basics-e93f9761f86f)
- [Takeaways on Building a React Based App with Electron](https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start-react`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn start-electron`

Starts the Electron desktop version of the app and points to [http://localhost:3000](http://localhost:3000).

### `yarn start`

Runs the app in the development mode on localhost:3000](http://localhost:3000) but does not open a browser window. After the dev server is loaded it starts the Electron desktop version of the app and points to [http://localhost:3000](http://localhost:3000).

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
### `yarn run build` **needs to be reworded for building electron apps

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```

# ToDos
- add more dev Vs prod utilities and scripts
- add redux-logic https://github.com/jeffbski/redux-logic
- add electron about page https://www.npmjs.com/package/about-window
- add eletron is https://github.com/delvedor/electron-is
- add electron log https://github.com/megahertz/electron-log
- add react-grid-system https://github.com/JSxMachina/react-grid-system
- choose a UI Kit
	- React PhotonKit https://github.com/react-photonkit/react-photonkit
	- react-desktop https://github.com/gabrielbull/react-desktop
	- XEL https://xel-toolkit.org/
	- Blue Print https://blueprintjs.com
- choose a db storage mechanism
	- RxDB https://rxdb.info/install.html
	- ~~NeDB https://github.com/louischatriot/nedb~~ LinvoDB https://github.com/Ivshti/linvodb3
	- electronDb https://www.npmjs.com/package/electron-db
	- SQLite + Sequelize https://medium.com/getstation/what-we-learned-from-data-persistence-in-our-growing-electron-app-72c9ad19fce
- figure aout build process and add instructions
