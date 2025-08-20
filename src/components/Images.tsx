import { type Image as ImageType } from "../@types/context";

import Image from "./Image";

const ImagesBlock = ({ images }: { images: ImageType[] }) => {
  return (
    <div className="mt-6 flex flex-col items-center gap-10 md:mt-10 md:gap-16">
      {images.map((image) => (
        <figure className="relative flex w-full grow flex-col justify-center">
          <Image image={image} key={image.src} />

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

export default ImagesBlock;
