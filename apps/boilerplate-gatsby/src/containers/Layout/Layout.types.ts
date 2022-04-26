import type { PropsWithChildren } from 'react';

import type { PageProps } from 'gatsby';

export type LayoutProps = PropsWithChildren<
  Partial<Omit<PageProps, 'children'>>
>;
