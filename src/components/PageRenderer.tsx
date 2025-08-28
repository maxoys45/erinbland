import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

import Header from "./Header";
import Images from "./Images";
import ImageText from "./ImageText";
import Links from "./Links";

import Spinner from "./Spinner";
import NotFound from "./NotFound";

const PageRenderer = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { content, loading, getContent, toggleMenu } =
    useContext<AppContextType>(AppContext);
  const [localContent, setLocalContent] = useState<typeof content>(null);

  const pageSlug = slug || "about";

  useEffect(() => {
    // Close the sidebar
    toggleMenu(true);

    // Get the content
    getContent(pageSlug);
  }, [pageSlug]);

  useEffect(() => {
    if (!loading) {
      setLocalContent(content ?? null);
    }
  }, [loading, content]);

  if (!localContent) return <NotFound />;

  const { title, description, images, contentBlock, links } = localContent;

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={pageSlug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-10 flex grow flex-col items-center"
      >
        {(title || description) && (
          <Header title={title} description={description} />
        )}

        {images?.length && <Images images={images} />}

        {contentBlock && <ImageText contentBlock={contentBlock} />}

        {links?.length && <Links links={links} />}
      </motion.article>
    </AnimatePresence>
  );
};

export default PageRenderer;
