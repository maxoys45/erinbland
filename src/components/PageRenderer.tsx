import { useContext, useEffect, useState } from "react";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import pages from "../content/pages.json";
import copy from "../content/copy.json";

import Header from "./Header";
import Images from "./Images";
import ImageText from "./ImageText";
import Links from "./Links";

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

  const { header, images, image_text, links } = content;

  return (
    <article
      className={clsx(
        "mb-10 flex grow flex-col items-center",
        isVisible ? "opacity-100 transition-opacity duration-400" : "opacity-0"
      )}
    >
      {header && <Header header={header} />}

      {images?.length && <Images slug={slug} images={images} />}

      {image_text && <ImageText slug={slug} image_text={image_text} />}

      {links?.length && <Links links={links} />}
    </article>
  );
};

export default PageRenderer;
