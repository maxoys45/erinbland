import { useContext, useEffect, useState } from "react";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

import Header from "./Header";
import Images from "./Images";
import ImageText from "./ImageText";
import Links from "./Links";

import Spinner from "./Spinner";

const PageRenderer = ({ slug }: { slug: string }) => {
  const { content, loading, getContent, toggleMenu } =
    useContext<AppContextType>(AppContext);
  const [localContent, setLocalContent] = useState<typeof content>(null);

  useEffect(() => {
    // Close the sidebar
    toggleMenu(true);

    // Get the content
    getContent(slug);
  }, [slug]);

  useEffect(() => {
    if (!loading && content) {
      setLocalContent(content);
    }
  }, [loading, content]);

  if (!localContent)
    return (
      <div className="mt-10 flex grow justify-center">
        <Spinner />
      </div>
    );

  const { title, description, images, contentBlock, links } = localContent;

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
