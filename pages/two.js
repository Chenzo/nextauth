import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function TWO() {

  const { data: session } = useSession();

  console.log("--- inside SESSION 2");
  console.log(session);

  return (
    <div className={styles.container}>
      Page 2
    </div>
  )
}
