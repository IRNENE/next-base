import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';

export default function Login() {
  const { auth, login, logout } = useAuth();
  return (
    <>
      <h1>會員登入頁</h1>
      <p>目前登入狀態:{auth.isAuth ? '已登入' : '未登入'}</p>
      <button
        onClick={() => {
          if (auth.isAuth) logout();
          else login();
        }}
      >
        {auth.isAuth ? '登出' : '登入'}
      </button>
      <hr />
      <Link href={'/cs-0408/user/profile'}>個人資料頁面</Link>
    </>
  );
}
