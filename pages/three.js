import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()

    console.log(session);

    return (
        <div>
            <h1>We're here</h1>
            <a href="/two">two</a>
      </div>
    )
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}