import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './stylesheets/materialTheme';
import './css/main.css';
import App from './components/App';

const muiTheme = getMuiTheme(theme);

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));

registerServiceWorker();
