import type { Image as ImageType } from "../@types/context";

import Image from "./Image";

const ImageText = ({ contentBlock }: { contentBlock: ImageType }) => {
  return (
    <>
      <hr className="my-10 h-px w-full border-0 bg-gray-300 md:my-16" />

      <div className="grid items-center gap-4 xl:grid-cols-2 xl:gap-10">
        <figure className="relative">
          <Image image={contentBlock} key={contentBlock.src} />
        </figure>

        {contentBlock.caption && (
          <p className="whitespace-pre-line max-md:text-sm">
            {contentBlock.caption}
          </p>
        )}
      </div>
    </>
  );
};

export default ImageText;
