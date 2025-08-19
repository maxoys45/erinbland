import { type Image } from "../@types/context";

const ImageTextBlock = ({
  slug,
  image_text,
}: {
  slug: string;
  image_text: Image;
}) => {
  return (
    <>
      <hr className="my-10 h-px w-full border-0 bg-gray-300 md:my-16" />

      <div className="grid items-center gap-4 xl:grid-cols-2 xl:gap-10">
        <figure>
          <img
            className="max-w-full shadow"
            src={`/images/${slug}/${image_text.src}`}
            alt={image_text.text}
            loading="lazy"
          />
        </figure>

        {image_text.text && (
          <p className="whitespace-pre-line max-md:text-sm">
            {image_text.text}
          </p>
        )}
      </div>
    </>
  );
};

export default ImageTextBlock;
