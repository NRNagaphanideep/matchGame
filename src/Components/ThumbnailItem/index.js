import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage} = props
  const {thumbnailUrl} = imageDetails

  const onClickChangeImage = () => {
    updateImage(thumbnailUrl)
  }

  return (
    <li className="thumbnail-list-container">
      <button
        type="button"
        className="image-button"
        onClick={onClickChangeImage}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
