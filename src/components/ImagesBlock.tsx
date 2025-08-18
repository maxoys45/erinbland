import { type Image } from "../context/types";

const ImagesBlock = ({ slug, images }: { slug: string; images: Image[] }) => {
  return (
    <div className="mt-6 flex flex-col items-center gap-10 md:mt-10 md:gap-16">
      {images.map((image, idx) => (
        <figure key={idx}>
          <img
            className="max-w-full shadow"
            src={`/images/${slug}/${image.src}`}
            alt={image.text}
            loading="lazy"
          />
          {image.text && (
            <figcaption className="pt-3 whitespace-pre-line max-md:text-sm">
              {image.text}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

export default ImagesBlock;
