import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"

export default function Page({serverSession}, vince) {

    console.log("passed via page props: ");
    console.log(serverSession);
    console.log(vince);

    console.log(serverSession.user);
  /* const { data: session } = useSession()

    console.log(session); */

    return (
        <div>
            <h1>We're here</h1>
            <a href="/two">two</a>
      </div>
    )
}

export async function getServerSideProps(context) {

    console.log('getServerSideProps');
    let serverSession = await getServerSession(context.req, context.res, authOptions);

    console.log(serverSession);

  return {
    props: {
        serverSession: serverSession,
      vince: "chenzo"
    },
  }
}