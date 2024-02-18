/* eslint-disable react/prop-types */
export default function ImageItem({ image }) {

    return (
        <>
            <img className="imageListImg" src={image.urls.small} alt={image.alt_description} />
        </>
    )
}