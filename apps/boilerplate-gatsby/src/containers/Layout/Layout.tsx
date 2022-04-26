import { ErrorBoundary } from 'react-error-boundary';

import './Layout.css';
import type { LayoutProps } from './Layout.types';

import { ErrorFallback } from '../../components/ErrorFallback';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { AuthorizationProvider } from '../../providers/AuthorizationProvider';
import { SEO } from '../SEO';

export function Layout({ children, path }: LayoutProps) {
  return (
    <AuthorizationProvider path={path}>
      <section className="layout">
        <SEO />
        <Header />
        <Main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
          </ErrorBoundary>
        </Main>
        <Footer />
      </section>
    </AuthorizationProvider>
  );
}
