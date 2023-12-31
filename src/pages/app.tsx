import { FC } from 'react';
import { AppProps } from 'next/app';
import React from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;