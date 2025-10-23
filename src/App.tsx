// src/App.tsx
// 入口文件 仅有一层路由，不需要Outlet

import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';

import { pageConfigArr } from '@/router/routerConfig';
import AppLayout from '@/layouts/AppLayout';

// 主应用组件
const App: React.FC = () => {
  // ↓ 裸露的页面内容 (没有nav, 没有footer)
  const barePageContent = (
    <Routes>
        {/* 
          <Route
            key={route.path}
            path={route.path}
            element={<Component />}
          />
          产生真实的页面内容
        */}
      {pageConfigArr.map((route) => {
        const Component = lazy(() => import(`@/pages/${route.componentPath}`));
        return <Route key={route.path} path={route.path} element={<Component />} />;
      })}
    </Routes>
  );

  return (
    <ConfigProvider locale={zh_CN}>
      <BrowserRouter basename='rsb'>
        {/* 抽离barePageContent之后就可以放置到各种Layout中 */}
        <AppLayout>{barePageContent}</AppLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
