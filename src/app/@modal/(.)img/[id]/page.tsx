import { getImageByImageId } from '~/server/queries';
import { Modal } from './modal';
import Image from 'next/image';

export default async function PhotoModal({
    params: { id: imageId },
}: { params: { id: string }}) {
    const idAsNumber = Number(imageId)
    if(Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

    const image = await getImageByImageId(idAsNumber);
    return <Modal>
        {image && (<Image src={image.url} alt={image.name} fill />)}
    </Modal>
}