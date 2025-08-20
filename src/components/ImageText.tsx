import { type Image } from "../@types/context";

const ImageTextBlock = ({ contentBlock }: { contentBlock: Image }) => {
  return (
    <>
      <hr className="my-10 h-px w-full border-0 bg-gray-300 md:my-16" />

      <div className="grid items-center gap-4 xl:grid-cols-2 xl:gap-10">
        <figure>
          <img
            className="max-w-full shadow"
            src={contentBlock.src}
            alt={contentBlock.caption}
            loading="lazy"
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

export default ImageTextBlock;
