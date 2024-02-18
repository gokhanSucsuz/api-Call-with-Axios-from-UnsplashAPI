import ImageItem from "./ImageItem"

/* eslint-disable react/prop-types */
export default function ImageList({ images }) {
    return (
        <div className="img-container">
            {
                images.map(image => <ImageItem key={image.id} image={image} />
                )
            }
        </div>
    )
}