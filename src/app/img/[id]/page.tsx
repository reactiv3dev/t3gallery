import Image  from 'next/image'
import { getImageByImageId } from '~/server/queries';

export default async function PhotoModal({
    params: { id: imageId },
}: { params: { id: string }}) {

    const idAsNumber = Number(imageId)
    if(Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

    const image = await getImageByImageId(idAsNumber);
    return <div className='w-full h-full'>
        {image && (<Image src={image.url} alt={image.name} fill />)}
    </div>
}
 
