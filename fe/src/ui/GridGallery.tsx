import { CustomImage, images as IMAGES } from "@/data/images";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { memo, useState } from "react";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";

const ImageComponent = (props: ThumbnailImageProps) => {
  return (
    <Image
      key={props.imageProps.key}
      style={props.imageProps.style}
      src={props.imageProps.src}
      alt={props.imageProps.alt}
      width={props.item.width}
      height={props.item.height}
    />
  );
};

interface GridGalleryProps {}

const GridGallery: React.FC<GridGalleryProps> = () => {
  const matches = useMediaQuery("only screen and (min-width: 62rem)");
  const [index, setIndex] = useState(-1);

  const currentImage = IMAGES[index];
  const nextIndex = (index + 1) % IMAGES.length;
  const nextImage = IMAGES[nextIndex] || currentImage;
  const prevIndex = (index + IMAGES.length - 1) % IMAGES.length;
  const prevImage = IMAGES[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      {matches ? (
        <Gallery
          onClick={handleClick}
          key={+new Date()}
          images={IMAGES}
          enableImageSelection={false}
          maxRows={2}
          tagStyle={{
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px",
            fontSize: "0.6rem",
          }}
          thumbnailImageComponent={ImageComponent}
        />
      ) : (
        <Gallery
          onClick={handleClick}
          key={+new Date() + 1}
          images={IMAGES}
          enableImageSelection={false}
          maxRows={4}
          tagStyle={{
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px",
            fontSize: "0.6rem",
          }}
          thumbnailImageComponent={ImageComponent}
        />
      )}
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default memo(GridGallery);
