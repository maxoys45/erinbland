import { useContext, useEffect, useState } from "react";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import pages from "../content/pages.json";
import copy from "../content/copy.json";

import Spinner from "../assets/spinner.svg?react";

const PageRenderer = ({ slug }: { slug: string }) => {
  const { content, getContent, toggleMenu } =
    useContext<AppContextType>(AppContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const pageMeta = pages.find((value) => value.slug === slug);

  if (!pageMeta)
    return <div className="p-8 text-center">{copy.general.not_found}</div>;

  useEffect(() => {
    // Load content from JSON
    getContent(pageMeta.slug);

    // Close the sidebar
    toggleMenu(true);

    // Reset page opacity then show it.
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [slug]);

  if (!content)
    return (
      <div className="mt-10 flex grow justify-center">
        <Spinner width="30" height="30" />
      </div>
    );

  const { heading, body, images, links } = content;

  return (
    <article
      className={clsx(
        "mb-10 flex flex-col items-center text-center",
        isVisible ? "opacity-100 transition-opacity duration-400" : "opacity-0"
      )}
    >
      <title>{`Erin Bland - ${heading}`}</title>

      {heading && <h1 className="mb-4">{heading}</h1>}

      {body && <p className="mx-auto max-w-3xl text-sm md:text-lg">{body}</p>}

      {images?.length && (
        <div className="mt-6 flex flex-col items-center gap-10 md:mt-10 md:gap-16">
          {images.map((image, idx) => (
            <figure key={idx}>
              <img
                className="max-w-full shadow"
                src={`/images/${slug}/${image.src}`}
                alt={image.caption}
                loading="lazy"
              />
              {image.caption && (
                <figcaption className="pt-3 whitespace-pre-line max-md:text-sm">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {links?.length && (
        <div className="mt-4">
          {links.map((link, idx) => (
            <a
              className=""
              key={idx}
              href={link.includes("@") ? `mailto:${link}` : link}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default PageRenderer;
