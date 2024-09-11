import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function TopNav(){
    return (
      <nav className="w-full h-14 fixed flex flex-row items-center justify-between bg-[#2e026d] text-white text-xl font-semibold p-5">
        <h1>T3Gallery</h1>
         
        <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
      </nav>
    )
  }