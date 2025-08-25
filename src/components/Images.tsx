import { type Image as ImageType } from "../@types/context";

import Image from "./Image";

const Images = ({ images }: { images: ImageType[] }) => {
  return (
    <div className="mt-6 flex flex-col items-center gap-10 md:mt-10 md:gap-16">
      {images.map((image) => (
        <figure
          className="relative flex w-full grow flex-col justify-center"
          key={image.src}
        >
          <Image image={image} />

          {image.caption && (
            <figcaption className="pt-3 whitespace-pre-line max-md:text-sm">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

export default Images;
