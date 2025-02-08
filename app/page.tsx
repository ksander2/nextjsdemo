'use client'

import { useEffect, useState } from "react";
import { List } from 'antd';

type User = {
  id: number;
  name: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>();
  const api = `${process.env.NEXT_PUBLIC_API_ADDRESS}/users`;
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(result => setUsers(result));
  }, [])

  return (
    <div>
      <List<User>
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={users}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </div>
  );
}
