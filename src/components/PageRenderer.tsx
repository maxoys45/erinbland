import { useContext, useEffect } from "react";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import pages from "../content/pages.json";

const PageRenderer = ({ slug }: { slug: string }) => {
  const appContext = useContext<AppContextType>(AppContext);
  const pageMeta = pages.find((value) => value.slug === slug);

  if (!pageMeta) return <div className="p-8 text-center">Page not found.</div>;

  useEffect(() => {
    appContext.toggleMenu(true);
    appContext.getContent(pageMeta.content);
  }, [slug]);

  if (!appContext.content) return <div>Loading...</div>;

  const { heading, body, images } = appContext.content;

  return (
    <>
      <h2 className="mb-4">{heading}</h2>

      <p className="mb-6 text-sm md:text-lg">{body}</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {images?.length > 0 &&
          images.map((src, idx) => (
            <img
              key={idx}
              src={`/images/${slug}/${src}`}
              alt={`Image ${idx + 1}`}
              className="rounded-lg shadow"
            />
          ))}
      </div>
    </>
  );
};

export default PageRenderer;
