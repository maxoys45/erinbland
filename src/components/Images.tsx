import { type Image as ImageType } from "../context/types";

import Image from "./Image";

const ImagesBlock = ({
  slug,
  images,
}: {
  slug: string;
  images: ImageType[];
}) => {
  return (
    <div className="mt-6 flex flex-col items-center gap-10 md:mt-10 md:gap-16">
      {images.map((image, idx) => (
        <Image slug={slug} image={image} key={idx} />
      ))}
    </div>
  );
};

export default ImagesBlock;
