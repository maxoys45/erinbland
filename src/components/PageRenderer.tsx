import { useContext, useEffect, useState } from "react";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

import Header from "./Header";
import Images from "./Images";
import ImageText from "./ImageText";
import Links from "./Links";

import Spinner from "../assets/spinner.svg?react";

const PageRenderer = ({ slug }: { slug: string }) => {
  const { content, loading, getContent, toggleMenu } =
    useContext<AppContextType>(AppContext);

  useEffect(() => {
    // Close the sidebar
    toggleMenu(true);

    // Get the content
    getContent(slug);
  }, [slug]);

  if (!content)
    return (
      <div className="mt-10 flex grow justify-center">
        <Spinner width="30" height="30" />
      </div>
    );

  const { title, description, images, contentBlock, links } = content;

  return (
    <article
      className={clsx(
        "mb-10 flex grow flex-col items-center",
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-400"
      )}
    >
      {(title || description) && (
        <Header title={title} description={description} />
      )}

      {images?.length && <Images images={images} />}

      {contentBlock && <ImageText contentBlock={contentBlock} />}

      {links?.length && <Links links={links} />}
    </article>
  );
};

export default PageRenderer;
