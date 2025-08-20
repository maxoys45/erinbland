import { type Image as ImageType } from "../@types/context";

import Image from "./Image";

const ImagesBlock = ({ images }: { images: ImageType[] }) => {
  return (
    <div className="mt-6 flex flex-col items-center gap-10 md:mt-10 md:gap-16">
      {images.map((image, idx) => (
        <Image image={image} key={idx} />
      ))}
    </div>
  );
};

export default ImagesBlock;
