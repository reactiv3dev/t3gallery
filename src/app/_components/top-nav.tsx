"use client"
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/vendor/uploadthing/components/upload";

export default function TopNav(){
    const router= useRouter();
    return (
      <nav className="w-full h-20 fixed flex flex-row items-center justify-between bg-[#2e026d] text-white text-xl font-semibold p-5">
        <h1>T3Gallery</h1>
         
        <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row gap-4 justify-normal items-center">
            <UploadButton 
                className="relative top-3"
                endpoint="imageUploader"
                onClientUploadComplete={() => router.refresh()} 
            /> 
            <UserButton />
          </div>
          
        </SignedIn>
        </div>
      </nav>
    )
  }