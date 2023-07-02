import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession();

  console.log("--- inside SESSION");
  console.log(session);

  return (
    <div className={styles.container}>
      here we are.
      <button onClick={() => signIn('discord')}>Sign in</button>
    </div>
  )
}
