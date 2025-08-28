import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

import Header from "./Header";
import Images from "./Images";
import ImageText from "./ImageText";
import Links from "./Links";

import NotFound from "./NotFound";

import Spinner from "./Spinner";

const PageRenderer = () => {
  const { slug } = useParams<{ slug?: string }>();
  const { content, loading, getContent, toggleMenu } =
    useContext<AppContextType>(AppContext);
  const [localContent, setLocalContent] = useState<typeof content | undefined>(
    undefined
  );

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

  const fadeMotion = {
    initial: { opacity: 0, transform: "translateY(2rem)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    exit: { opacity: 0, transform: "translateY(-2rem)" },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="spinner"
          className="relative mt-10 flex grow justify-center"
          {...fadeMotion}
        >
          <Spinner />
        </motion.div>
      ) : localContent ? (
        <motion.article
          key={slug}
          className="mb-10 flex grow flex-col items-center"
          {...fadeMotion}
        >
          {(localContent.title || localContent.description) && (
            <Header
              title={localContent.title}
              description={localContent.description}
            />
          )}

          {localContent.images?.length && (
            <Images images={localContent.images} />
          )}

          {localContent.contentBlock && (
            <ImageText contentBlock={localContent.contentBlock} />
          )}

          {localContent.links?.length && <Links links={localContent.links} />}
        </motion.article>
      ) : (
        <motion.div key="404" {...fadeMotion}>
          <NotFound />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageRenderer;
