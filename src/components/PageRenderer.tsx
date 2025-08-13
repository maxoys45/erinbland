import { useContext, useEffect } from "react";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import pages from "../content/pages.json";
import copy from "../content/copy.json";

const PageRenderer = ({ slug }: { slug: string }) => {
  const { content, getContent, toggleMenu } =
    useContext<AppContextType>(AppContext);
  const pageMeta = pages.find((value) => value.slug === slug);

  if (!pageMeta)
    return <div className="p-8 text-center">{copy.general.not_found}</div>;

  useEffect(() => {
    getContent(pageMeta.content);
    toggleMenu(true);
  }, [slug]);

  if (!content) return <div>{copy.general.loading}</div>;

  const { heading, body, images } = content;

  return (
    <>
      <title>{`Erin Bland - ${heading}`}</title>

      <h2 className="mb-4">{heading}</h2>

      <p className="text-md mb-6 md:text-lg">{body}</p>

      <div className={clsx("grid grid-cols-1 gap-10 md:gap-16")}>
        {images?.length > 0 &&
          images.map((image, idx) => (
            <figure key={idx}>
              <img
                className="w-full shadow"
                src={`/images/${slug}/${image.src}`}
                alt={image.caption}
              />
              <figcaption className="pt-3 whitespace-pre-line max-md:text-sm">
                {image.caption}
              </figcaption>
            </figure>
          ))}
      </div>
    </>
  );
};

export default PageRenderer;
