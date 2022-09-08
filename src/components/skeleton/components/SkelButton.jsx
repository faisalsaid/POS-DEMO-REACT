import React from 'react';
import ContentLoader from 'react-content-loader';

const SkelButton = (props) => (
  <ContentLoader speed={2} width={80} height={20} viewBox="0 0 80 20" backgroundColor="#f9f9f9" foregroundColor="#efefef" {...props}>
    <rect x="0" y="0" rx="5" ry="5" width="80" height="20" />
  </ContentLoader>
);

export default SkelButton;
