# Fotolab- REACT

`npm install redux --save`

`npm install react-redux --save`
 
` npm i redux-thunk --save-dev`

`npm i react-id-generator`

`npm install react-bootstrap bootstrap`

`npm install react-bootstrap-table-next --save`

`npm add react-select`

`npm install --save react-router-dom`

`npm install node-dir`

`npm install file-system --save`

https://www.nafrontendzie.pl/react-router-wersji-4-wszystko-nowa

https://reacttraining.com/react-router/web/guides/quick-start


przykład połączenia react i bootstrap

C:\LAB\REACT\projekty\reactlab31

=============



#Scieżka do zdjęć

https://stackoverflow.com/questions/42395034/how-to-display-binary-data-as-image-in-react

https://stackoverflow.com/questions/51184136/display-an-image-from-url-in-reactjs

https://www.baeldung.com/spring-mvc-image-media-data

https://stackoverflow.com/questions/8656085/how-to-send-an-image-from-web-service-in-spring

https://stackoverflow.com/questions/41906204/java-how-to-send-images-from-a-restful-web-service



https://javahosting.pl/

https://www.hekko.pl/serwery_vps.html


## czytanie zdjęcia z rest byte[]
https://www.javascripture.com/Blob

----------

1

`const byteCharacters = atob(result);
const byteNumbers = new Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
}
const byteArray = new Uint8Array(byteNumbers);
let image = new Blob([byteArray], { type: 'image/jpeg' });`

Once you have the Blob you need to convert that into a data url like this:

`let imageUrl = URL.createObjectURL(image);
this.setState({image: imageUrl});`

now u can use this url saved in your state as a source for image like this:

`<img src={this.state.image} />`

Hope this helps!!

------------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


