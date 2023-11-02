import { logout } from '@lib/firebase';

export default function Home() {
  return (
    <section>
      Home <button onClick={logout}>Logout</button>
    </section>
  );
}
