import React, { useState } from "react";
import Modal from "./Modal";

const PropertyImg = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  console.log("Images received:", images);

  const handleShowAllPhotos = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageError = (index) => {
    console.error(`Image ${index} failed to load:`, images[index]?.url);
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  if (!images || images.length === 0) {
    return <div className="property-img-container">No images available</div>;
  }

  // Fallback image if main image fails
  const fallbackImage = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop&q=80";

  return (
    <>
      <div className="property-img-container">
        {/* Apply different style to the first image */}
        <div className="img-item">
          <img
            src={imageErrors[0] ? fallbackImage : images[0]?.url || fallbackImage}
            className="images"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            alt="property-1"
            onError={() => handleImageError(0)}
            loading="lazy"
          />
        </div>
        {/* Render the remaining 4 images in a row */}
        {images.slice(1, 5).map((image, index) => (
          <div key={index}>
            <img
              className="images"
              src={imageErrors[index + 1] ? fallbackImage : image?.url || fallbackImage}
              alt={`property-${index + 2}`}
              onError={() => handleImageError(index + 1)}
              loading="lazy"
            />
          </div>
        ))}
        {images[5] && (
          <div>
            <img
              className="images"
              src={imageErrors[5] ? fallbackImage : images[5]?.url || fallbackImage}
              alt={`property-6`}
              style={{ borderBottomRightRadius: "10px" }}
              onError={() => handleImageError(5)}
              loading="lazy"
            />
            <button className="similar-photos" onClick={handleShowAllPhotos}>
              <span className="material-symbols-outlined">photo_library</span>
            </button>
          </div>
        )}
      </div>
      {/* Place the button container outside the image container */}
      <div className="similar-photos-container"></div>
      {isModalOpen && <Modal images={images} onClose={handleCloseModal} />}
    </>
  );
};

export default PropertyImg;
