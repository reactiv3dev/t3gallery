import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getImages, getMyImages } from "~/server/queries";
//export const dynamic = "force-dynamic";

export const revalidate = 300;

async function Images(){
  const  images = await getImages();
  return (
    <>
      <h1 className="text-2xl text-center m-5">All Uploaded Images:</h1>
      <div className="w-full mt-5 flex flex-wrap items-center justify-center gap-4 ">
         
         {
           images?.map((image) => (
             <div key={image.id} className="w-96 flex flex-col items-center">
               <Link href={`/photo/${image.id}`}> 
               <Image src={image.url} style={{ objectFit: "contain"}} width={384} height={384}  alt={image.name}   />
               </Link>
               <span>{image.name}</span>
             </div>
           ))
         }
       </div>
    </>
  )
}
 
async function MyImages(){
  const  images = await getMyImages();
  return (
    <>
      <h1 className="text-2xl text-center m-5">Your Personal Images:</h1>
      <div className="w-full mt-5 flex flex-wrap items-center justify-center gap-4 ">
         
         {
           images?.map((image) => (
             <div key={image.id} className="w-96 flex flex-col items-center">
              <Link href={`/photo/${image.id}`}> 
               <Image src={image.url} style={{ objectFit: "contain"}} width={384} height={384}  alt={image.name}   />
               </Link>
               <span>{image.name}</span>
             </div>
           ))
         }
       </div>
    </>
     
  )
}
export default async function HomePage() {
   

  return (
    <main className="flex mt-12 min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-2xl font-semibold m-5 p-5">T3 Gallery (gallery in progress)</h1>
        <SignedOut>
          <span>Please Sign In to access the gallery...</span>
          <Images />
        </SignedOut>
        <SignedIn>
            <MyImages />
            <Images />
        </SignedIn>
    </main>
  );
}
