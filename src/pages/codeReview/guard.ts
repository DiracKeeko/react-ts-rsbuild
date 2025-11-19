interface UserDetail {
  id: number;
  settings: {
    theme: string;
    notifications: boolean;
  };
}

const getUserDetail = (id: number): Promise<UserDetail> => {
  return Promise.resolve({
    id,
    settings: {
      theme: 'dark',
      notifications: true,
    },
  });
}

// 后端可能返回空，或者部分字段缺失
const fetchUser = async (id: number) => {
  const response = await getUserDetail(id);
  // 强行断言！告诉 TS "相信我，结构肯定是完整的"
  // 但实际上 response 可能是 null，或者 settings 是 null
  return response as UserDetail; 
};

const main = async () => {
  const user = await fetchUser(1);
  // 运行时, 如果 settings 为空，这里直接报错白屏
  console.log(user.settings.theme);
}

main();

