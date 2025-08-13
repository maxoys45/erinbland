import { useParams } from "react-router-dom";
import PageRenderer from "../components/PageRenderer";

const DynamicPage = () => {
  const { slug } = useParams();

  if (!slug)
    return <div className="text-center p-8">Dynamic page not found.</div>;

  return <PageRenderer slug={slug} />;
};

export default DynamicPage;
