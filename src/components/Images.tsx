import { useState } from "react";
import clsx from "clsx";

import { type Image as ImageType } from "../@types/context";

import Image from "./Image";

const Images = ({ images }: { images: ImageType[] }) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="mt-6 flex w-full flex-col items-center gap-10 md:mt-10 md:gap-16">
      {images.map((image) => (
        <figure
          className={clsx(
            "relative flex flex-col justify-center",
            loading ? "w-full grow" : ""
          )}
          key={image.src}
        >
          <Image image={image} loading={loading} setLoading={setLoading} />

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
