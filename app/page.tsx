'use server'
import { User } from './type';
import { MyList } from './MyList';

export default async function Home() {
  const api = `${process.env.NEXT_PUBLIC_API_ADDRESS}/users`;
  const result = await fetch(api);
  const users = await result.json() as User[];

  return (
    <div>
      <MyList users={users} />
    </div>
  );
}
