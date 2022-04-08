import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '../../components/ErrorFallback';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { SEO } from '../SEO';
import type { LayoutProps } from './Layout.types';

export function Layout({ children }: LayoutProps) {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <SEO />
      <Header />
      <Main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </Main>
      <Footer />
    </section>
  );
}
