import { getImageByImageId } from '~/server/queries';
import { Modal } from './modal';
import Image from 'next/image';

export default async function PhotoModal({
    params: { id: photoId },
}: { params: { id: string }}) {
    const image = await getImageByImageId(+photoId);
    return <Modal>
        {image && (<Image src={image.url} alt={image.name} fill />)}
    </Modal>
}