// vite.config.js

import path from 'path';

export default {
  // config options
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
