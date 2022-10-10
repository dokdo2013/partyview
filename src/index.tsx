import { createRoot } from 'react-dom/client';
import App from './App';
import './fonts.css';
import { ColorModeScript } from '@chakra-ui/react';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { StrictMode } from 'react';

Sentry.init({
  dsn: 'https://372ccba4b6d547a594fb44ba85ce13fa@o1217331.ingest.sentry.io/6359372',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);
