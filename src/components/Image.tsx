import clsx from "clsx";

import { type Image as ImageType } from "../@types/context";

import Spinner from "./Spinner";

type ImageProps = {
  image: ImageType;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Image = ({ image, loading, setLoading }: ImageProps) => {
  return (
    <>
      <picture
        className={clsx(
          "flex grow justify-center overflow-hidden transition-opacity",
          loading ? "h-[0] w-full pb-[130%] opacity-0" : "opacity-100"
        )}
      >
        <source
          media="(max-width: 767px)"
          srcSet={`
              ${image.src}?w=610&fit=max&auto=format&q=90 1x,
              ${image.src}?w=1220&fit=max&auto=format&q=90 2x,
              ${image.src}?w=1830&fit=max&auto=format&q=90 3x
            `}
        />

        <source
          media="(max-width: 1023px)"
          srcSet={`
              ${image.src}?w=690&fit=max&auto=format&q=90 1x,
              ${image.src}?w=1380&fit=max&auto=format&q=90 2x
            `}
        />

        <img
          src={`${image.src}?w=1420&fit=max&auto=format&q=90`}
          srcSet={`
              ${image.src}?w=1420&fit=max&auto=format&q=90 1x,
              ${image.src}?w=2840&fit=max&auto=format&q=90 2x
            `}
          alt=""
          className="max-w-full shadow"
          onLoad={() => setLoading(false)}
          loading="lazy"
        />
      </picture>

      {loading && <Spinner />}
    </>
  );
};

export default Image;
