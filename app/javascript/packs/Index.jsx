import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import App from '../components/App';
import Container from '@material-ui/core/Container';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'myriad-pro',
      'Helvetica Neue',
      'sans-serif',
    ],
  },
  palette: {
    primary: {
      main: '#4D5F80',
    },
    secondary: {
      main: '#B7312C',
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ThemeProvider theme={theme}>
      <Container maxWidth={'lg'}>
        <App/>
      </Container>
    </ThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  );
});
