import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
 


export async function getImages(){
    const  images = await db.query.images.findMany({
        orderBy: (image,{desc}) => desc(image.createdAt),
        limit: 10,
        offset: 0
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

export async function getImageByImageId(imageId: number){
    const user = auth();

    if(!user.userId) throw new Error("Unauthorized");

    const  image = await db.query.images.findFirst({
        where: (image, { eq }) => eq(image.id, imageId)
    })
    if(!image) throw new Error("Image not found!");
    return image;
}

export async function getImagesByUser(userId: string){
    const  images = await db.query.images.findMany({
        orderBy: (image,{desc}) => desc(image.createdAt)
    })

    return images;
}