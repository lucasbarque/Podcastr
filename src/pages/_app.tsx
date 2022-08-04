import '../styles/global.scss';

import styles from '../styles/app.module.scss';

import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerContext.Provider value={'Lucas'}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
