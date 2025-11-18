/* 
// 原始代码
interface UserItem {
  createTime: string;
  id: number;
  name: string;
  orgName: string;
  pathName: string;
  roleName: string; // 返回体中没有这个参数
  roleNames: string[];
  roleType: string;
  sapId: string;
  status: number | string; // 返回体中是number类型
  ystId: string;
}

const list: UserItem[] = [
  // ...省略
];
const excelData = (list || []).map((v) => {
  const ite = v;
  // ↓ UserItem中额外添加的roleName在里用到
  ite.roleName = ite.roleNames.join();
  // ↓ UserItem中 status额外添加的string类型用在了这里
  ite.status = ite.status ? '是' : '否';
  return ite;
});
 */

// 重构后的代码
interface UserItem {
  createTime: string;
  id: number;
  name: string;
  orgName: string;
  pathName: string;
  roleNames: string[];
  roleType: string;
  sapId: string;
  status: number;
  ystId: string;
}

const list: UserItem[] = [
  // ...省略
];

type TableRow = Omit<UserItem, 'status' | 'roleNames'> & {
  status: string;
  roleName: string;
};

const excelData: TableRow[] = (list || []).map((el) => {
  const { roleNames, status, ...baseItem } = el; // 重要
  const roleName = roleNames.join(',');
  const statusStr = status ? '是' : '否';
  return { ...baseItem, roleName, status: statusStr };
});
