import type { RouterItem, PageConfig } from './constant';

// routerConfig 用于生成 1.导航菜单; 2.页面路由
// componentPath  ->  `@/pages/${componentPath}`
const routerConfig: RouterItem[] = [
  {
    path: '/home',
    name: '首页',
    componentPath: 'home/Home',
  },
  {
    path: '/metaData',
    name: '数据管理',
    children: [
      {
        path: '/metaData/assets',
        name: '数据资产',
        componentPath: 'home/Home',
      },
      {
        path: '/metaData/dict',
        name: '数据字典',
        componentPath: 'metaData/dataDict/DataDict',
      },
      {
        path: '/metaData/dictConnect',
        name: '链接关系',
        componentPath: 'metaData/dictConnect/DictConnect',
      },
      {
        path: '/metaData/dictDetail',
        name: '字典详情',
        componentPath: 'metaData/dictDetail/DictDetail',
      },
    ],
  },
  {
    path: '/case',
    name: '案例展示',
    children: [
      {
        path: '/case/case1',
        name: '类型问题',
        componentPath: 'case/case1/Case1',
      },
      {
        path: '/case/case2',
        name: 'js-financial-tools使用',
        componentPath: 'case/case2/Case2',
      },
      {
        path: '/case/case3',
        name: 'context使用',
        componentPath: 'case/case3/Case3',
      },
      {
        path: '/case/case4',
        name: 'Tree的报错举例',
        componentPath: 'case/case4/Case4',
      },
      {
        path: '/case/case5',
        name: 'Card组件',
        componentPath: 'case/case5/Case5',
      },
      {
        path: '/case/case6',
        name: '优雅使用svg',
        componentPath: 'case/case6/Case6',
      },
      {
        path: '/case/case7',
        name: '交互组件',
        componentPath: 'case/case7/Case7',
      },
      {
        path: '/case/case8',
        name: 'NoContent组件',
        componentPath: 'case/case8/Case8',
      },
    ],
  },
  {
    path: '/visualPresentation',
    name: '视觉展示',
    componentPath: 'visualPresentation/VisualPresentation',
  },
  {
    path: '/chart',
    name: '图展示',
    children: [
      {
        path: '/chart/chart1',
        name: '组织关系图',
        componentPath: 'chart/chart01/Chart01',
      },
      {
        path: '/chart/chart2',
        name: 'Dag图',
        componentPath: 'chart/chart02/Chart02',
      },
      {
        path: '/chart/chart3',
        name: 'Dag图',
        componentPath: 'chart/chart03/Chart03',
      },
    ],
  },
  {
    path: '/operation',
    name: '激活菜单展示',
    componentPath: 'operation/Operation',
  },
];

// pageConfigArr 已经flat处理, 创建 barePageContent 使用
const pageConfigArr: PageConfig[] = [];
routerConfig.forEach((item) => {
  if ('children' in item) {
    item.children.forEach(({ path, name, componentPath }) => {
      pageConfigArr.push({
        path,
        name,
        componentPath
      });
    });
  } else {
    const { path, name, componentPath } = item;
    pageConfigArr.push({
      path,
      name,
      componentPath
    });
  }
});

export { routerConfig, pageConfigArr };
