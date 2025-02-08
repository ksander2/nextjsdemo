'use client'

import { useEffect, useState } from "react";
import { Divider, List, Typography } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

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
