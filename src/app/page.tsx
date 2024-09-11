import { db } from "~/server/db";
//export const dynamic = "force-dynamic";

export const revalidate = 300;
 
 
export default async function HomePage() {
  const  images = await db.query.images.findMany();
  
  return (
    <main className="flex mt-12 min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-2xl font-semibold m-5">Vikings (gallery in progress)</h1>
      <div className="w-full mt-5 flex flex-wrap items-center justify-center gap-4 ">
         
        {
          images?.map((image) => (
            <div key={image.id} className="w-96 flex flex-col items-center">
              <img src={image.url} alt="image"  />
              <span>{image.name}</span>
            </div>
          ))
        }
      </div>
    </main>
  );
}
