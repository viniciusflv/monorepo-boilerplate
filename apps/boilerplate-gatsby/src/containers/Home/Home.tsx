import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { SEO } from '../SEO';

export function Home() {
  return (
    <div>
      <SEO title="Home" />
      <StaticImage src="../../images/icon.png" alt="Icon" />
    </div>
  );
}
