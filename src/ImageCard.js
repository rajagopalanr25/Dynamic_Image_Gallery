function ImageCard({ image, title, description }) {
  return (
    <div className="image-card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
}

export default ImageCard;
