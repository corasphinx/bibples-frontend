import type { ReactElement, ReactNode } from 'react';
import { useState, useMemo } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createTheme from '@/theme/index';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';
import ColorModeContext from '@/contexts/colorModeContext';
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { ToastProvider } from 'react-toast-notifications';

// import Scrollbar from '@/components/Scrollbar';
import 'simplebar-react/dist/simplebar.min.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export interface AppPropsWithEmotion extends AppProps {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface AppPropsWithEmotionAndLayout extends AppPropsWithEmotion {
  Component: NextPageWithLayout;
}

function App(props: AppPropsWithEmotionAndLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store: any = useStore();
  const getLayout = Component.getLayout ?? ((page) => page);
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme({ mode }), [mode]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline enableColorScheme />
          {/* <Scrollbar sx={{ height: '100vh' }}> */}
          <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          {getLayout(<Component {...pageProps} />)}
          </PersistGate>
          {/* </Scrollbar> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(App);