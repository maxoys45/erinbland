import { useParams } from "react-router-dom";
import PageRenderer from "../components/PageRenderer";

import copy from "../content/copy.json";

const DynamicPage = () => {
  const { slug } = useParams();

  if (!slug)
    return <div className="p-8 text-center">{copy.general.not_found}</div>;

  return <PageRenderer slug={slug} />;
};

export default DynamicPage;
