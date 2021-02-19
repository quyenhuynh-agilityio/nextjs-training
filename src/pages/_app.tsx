import React from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import '../styles/layout.scss';
import '../styles/button.scss';
import '../styles/featured.scss';
import '../styles/property.scss';
import '../styles/our-partners.scss';
import '../styles/carousel.scss';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
