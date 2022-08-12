import React from 'react';
import normalizeUrl from 'normalize-url';

const normalU = (website) => {
  var url = normalizeUrl(website);
  return url;
};
