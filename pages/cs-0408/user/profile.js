import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
export default function Profile() {
  const { auth } = useAuth();
  return (
    <>
      <h1>會員個人資料頁</h1>
      <p>id: {auth.userData.id}</p>
      <p>usename: {auth.userData.username}</p>
      <p>name: {auth.userData.name}</p>
      <hr />
      <Link href="/cs-0408/user/login">登入頁</Link>
    </>
  );
}
