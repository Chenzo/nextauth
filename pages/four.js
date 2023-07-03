import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function TWO() {

  const { data: session, token } = useSession();

  console.log("--- inside SESSION 2");
  console.log(session);
  console.log(token);

  return (
    <div className={styles.container}>
      <h1>Page 4</h1>

      <p>
      <a href="/two">two</a>
      </p>
      <p>
      <a href="/three">three</a>
      </p>
      <p>
      <a href="/">HOME</a>
      </p>
    </div>
  )
}
