/* 
interface UserItem {
  createTime: string;
  id: number;
  name: string;
  orgName: string;
  pathName: string;
  roleName: string;
  roleNames: string[];
  roleType: string;
  sapId: string;
  status: number | string;
  ystId: string;
}

const list: UserItem[] = [
  // ...省略
];
const excelData = (list || []).map((v) => {
  const ite = v;
  ite.roleName = ite.roleNames.join();
  ite.status = ite.status ? '是' : '否';
  return ite;
});
*/

// 正确的定义 接口返回什么，就定义什么
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
  const { roleNames, status, ...baseItem } = el;
  const roleName = roleNames.join(',');
  const statusStr = status ? '是' : '否';
  return { ...baseItem, roleName, status: statusStr };
});
