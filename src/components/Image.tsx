import { useState } from "react";
import clsx from "clsx";

import { type Image as ImageType } from "../@types/context";

import Spinner from "./Spinner";

const Image = ({ image }: { image: ImageType }) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading && <Spinner />}

      <div
        className={clsx(
          "flex justify-center overflow-hidden transition-opacity",
          loading ? "h-[0] w-full pb-[130%] opacity-0" : "opacity-100"
        )}
      >
        <img
          className="max-w-full shadow"
          src={`${image.src}?w=1420&auto=format&q=80`}
          srcSet={`
            ${image.src}?w=610&auto=format&q=80 610w,
            ${image.src}?w=690&auto=format&q=80 690w,
            ${image.src}?w=1420&auto=format&q=80 1420w
          `}
          sizes="
            (min-width: 1024px) 1420px,
            (min-width: 768px) 690px,
            610px"
          alt=""
          onLoad={() => setLoading(false)}
        />

        {/*  <img
          className="max-w-full shadow"
          src={image.src}
          alt=""
          onLoad={() => setLoading(false)}
        /> */}
      </div>
    </>
  );
};

export default Image;
