import { NavLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"
import { getCurrentUser } from "@/lib/sessions"
import { SessionProvider } from "next-auth/react"

const Navbar = async () => {

  const session = await getCurrentUser();
  console.log("session", session);
  return (
    // <SessionProvider session={session} basePath="@/app/api/auth">
      <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={115}
              height={43}
              alt="Felxibble"
            />
          </Link>
          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key} >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flexCenter gap-4">
          {session ? (
            <>
              UserPhoto

              <Link href="/create-project">
                ShareWork
              </Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </nav>
    // </SessionProvider>

  )
}

export default Navbar