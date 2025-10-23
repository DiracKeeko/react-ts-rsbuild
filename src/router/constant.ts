type ChildItem = {
  name: string;
  path: string;
  componentPath: string;
  showInNav?: boolean; // 默认为true -> 展示在导航菜单中; 如果不展示, 需手动写明false
};

// 有拓展项的菜单
type SubRouterItem = {
  name: string;
  path: string;
  children: ChildItem[]; // 有拓展项的菜单只有拓展项children，没有 componentPath
};

// 顶层菜单
type TopLevelRouterItem = {
  path: string;
  name: string;
  componentPath: string; // 顶层菜单只有componentPath, 没有children
};

type RouterItem = TopLevelRouterItem | SubRouterItem;

type PageConfig = {
  path: string;
  name: string;
  componentPath: string;

};
export type { RouterItem, PageConfig };
