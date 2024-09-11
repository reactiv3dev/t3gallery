import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
 


export async function getImages(){
    const  images = await db.query.images.findMany({
        orderBy: (image,{desc}) => desc(image.createdAt)
    })

    return images;
}

export async function getMyImages(){

    const user = auth();

    if(!user.userId) throw new Error("Unauthorized");

    const  images = await db.query.images.findMany({
        where: (image, { eq }) => eq(image.userId, user.userId),
        orderBy: (image,{desc}) => desc(image.createdAt)
    })

    return images;
}

export async function getImagesByUser(userId: string){
    const  images = await db.query.images.findMany({
        orderBy: (image,{desc}) => desc(image.createdAt)
    })

    return images;
}