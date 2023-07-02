import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"; 


/* export async function getServerSideProps({req, res, authOptions}) {
    console.log("getServerSideProps!!");
    const session = await getServerSession(req, res, authOptions)

    console.log(session);
    return {
        props: {
            session: await getServerSession(req, res, authOptions)
        }
    }
}
 */

export default function THREE() {

    /* console.log("--- inside THREE");
    console.log(session); */

  const { data: clientSession } = useSession();

  console.log("--- inside clientSession 3");
  console.log(clientSession);

  return (
    <div className={styles.container}>
      Page 3 - can we get the data on the server side? 
    </div>
  )
}
