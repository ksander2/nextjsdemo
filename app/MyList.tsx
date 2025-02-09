'use client'
import { List } from 'antd';
import { User } from './type';

type MyListProps = {
    users: User[] | undefined;
}

export const MyList = ({ users }: MyListProps) => {
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
