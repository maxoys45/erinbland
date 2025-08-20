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
          "overflow-hidden transition-opacity",
          loading ? "h-[0] w-full pb-[130%] opacity-0" : "opacity-100"
        )}
      >
        <img
          className="max-w-full shadow"
          src={image.src}
          alt=""
          onLoad={() => setLoading(false)}
        />
      </div>
    </>
  );
};

export default Image;
