import React, { Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { routerConfig } from '@/router/routerConfig';

const { Header, Content } = Layout;

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children = null }) => {
  const location = useLocation(); // 获取当前路径，用于高亮菜单项
  const menuItems = routerConfig.map((route) => {
    // 类型判断（Type Guard）缩小范围
    if ('children' in route) {
      return {
        key: route.path,
        label: `${route.name}`,
        children: route.children.map((el) => ({
          key: el.path,
          label: <Link to={el.path}>{el.name}</Link>
        }))
      };
    }
    return {
      key: route.path,
      label: <Link to={route.path}>{route.name}</Link>
    };
  });

  return (
    <Layout style={{ height: '100%' }}>
      <Header
        style={{
          height: '60px',
          backgroundColor: 'var(--brand-color)'
        }}
      >
        {/* 导航栏 */}
        <div style={{ width: '100%' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ lineHeight: '60px', height: '60px' }}
            overflowedIndicator={null}
          />
        </div>
      </Header>
      <Content style={{ height: 'calc(100% - 60px)', overflow: 'hidden' }}>
        <div id="app" key={'root-app'} style={{ height: '100%' }}>
          {/* 路由视图 */}
          <Suspense>{children}</Suspense>
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
