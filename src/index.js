import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './fonts.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
const container = document.getElementById('root');
const root = createRoot(container);

Sentry.init({
  dsn: 'https://372ccba4b6d547a594fb44ba85ce13fa@o1217331.ingest.sentry.io/6359372',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

root.render(
  <>
    <ColorModeScript />
    <App />
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
