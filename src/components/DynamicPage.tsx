import { useParams } from "react-router-dom";
import PageRenderer from "../components/PageRenderer";

import Spinner from "./Spinner";

const DynamicPage = () => {
  const { slug } = useParams();

  if (!slug)
    return (
      <div className="mt-10 flex grow justify-center">
        <Spinner />
      </div>
    );

  return <PageRenderer slug={slug} />;
};

export default DynamicPage;
