import { db } from "~/server/db";
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/2898460f-d5db-480e-80eb-37b208f1a7c6-f7d0w0.jpg",
  "https://utfs.io/f/18c76560-3d1c-4888-a274-8fbc6c7445b0-orbtfp.jpg",
  "https://utfs.io/f/b19532bf-71d8-4022-b080-94f483d9dd2e-nminwi.jpg",
  "https://utfs.io/f/2ffa603d-c21f-4a4e-87fa-f27e2f5cffa5-fidbga.jpg",
  "https://utfs.io/f/97cc7b51-174d-48a5-b970-565be3e3ad31-be6i7s.jpg"
]

const mockImages = mockUrls.map((url, i) => ({
  id: i+1,
  url,
}))

export default async function HomePage() {
  const  posts = await db.query.posts.findMany();

  return (
    <main className="flex mt-12 min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-2xl font-semibold m-5">Hello (gallery in progress)</h1>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 ">
        {
          posts.map((post, i) => (
            <div key={i}>{post.name}</div>))
        }
        {
          [...mockImages].map((image) => (
            <div key={image.id} className="w-96">
              <img src={image.url} alt="image"  />
            </div>
          ))
        }
      </div>
    </main>
  );
}
