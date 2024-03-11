import "@/styles/globals.css";
import Header from '@/components/Header';
import { TransitionProvider } from '@/context/TransitionContext'
import Transition from '@/components/Transition';

export default function App({ Component, pageProps, router}) {
  return (
    <TransitionProvider>
      <Header />
      <Transition>
        <Component key={router.route} {...pageProps} />
      </Transition>
    </TransitionProvider>
  )
}
