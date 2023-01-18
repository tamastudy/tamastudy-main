import { images as IMAGES } from "@/data/images";
import { useMediaQuery } from "@react-hook/media-query";
import React, { memo } from "react";
import { Gallery } from "react-grid-gallery";



interface GridGalleryProps {}

const GridGallery: React.FC<GridGalleryProps> = () => {
  const matches = useMediaQuery("only screen and (min-width: 62rem)");
  console.log({ matches });
  return (
    <div>
      {matches ? (
        <Gallery
          key={+new Date()}
          images={IMAGES}
          enableImageSelection={false}
          maxRows={3}
          tagStyle={{
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px",
            fontSize: '0.6rem'
          }}
        />
      ) : (
        <Gallery
          key={+new Date() + 1}
          images={IMAGES}
          enableImageSelection={false}
          maxRows={5}
          tagStyle={{
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px",
            fontSize: '0.6rem'
          }}
        />
      )}
    </div>
  );
};

export default memo(GridGallery);
