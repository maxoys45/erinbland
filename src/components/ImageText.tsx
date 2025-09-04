import { useState } from "react";

import type { Image as ImageType } from "../@types/context";

import Image from "./Image";

const ImageText = ({ contentBlock }: { contentBlock: ImageType }) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <hr className="my-8 h-px w-full border-0 bg-gray-300 md:my-16" />

      <div className="grid items-center gap-4 xl:grid-cols-2 xl:gap-10">
        <figure className="relative">
          <Image
            image={contentBlock}
            loading={loading}
            setLoading={setLoading}
          />
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
