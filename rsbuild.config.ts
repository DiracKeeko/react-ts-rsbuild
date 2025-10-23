import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginLess({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always'
        }
      }
    })
  ],
  html: {
    template: './public/index.html'
  },
  resolve: {
    alias: {
      '@': './src'
    }
  },
  server: {
    base: '/rsb', // 启动server时增加前缀
    port: 3336 // 默认端口 3000
  }
});
