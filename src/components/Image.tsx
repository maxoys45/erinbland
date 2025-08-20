import { useState } from "react";
import clsx from "clsx";

import { type Image as ImageType } from "../@types/context";

// import Spinner from "../assets/spinner.svg?react";

const Image = ({ image }: { image: ImageType }) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <figure className="relative flex w-full grow flex-col justify-center">
      {/* {loading && (
        <Spinner
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="30"
          height="30"
        />
      )} */}

      <img
        className={clsx(
          "relative max-w-full overflow-hidden shadow",
          loading ? "h-[0] w-full pb-[130%] opacity-0" : "opacity-100"
        )}
        src={image.src}
        alt={image.caption}
        onLoad={() => setLoading(false)}
      />
      {image.caption && (
        <figcaption className="pt-3 whitespace-pre-line max-md:text-sm">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
