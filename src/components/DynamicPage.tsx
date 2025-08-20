import { useParams } from "react-router-dom";
import PageRenderer from "../components/PageRenderer";

import Spinner from "../assets/spinner.svg?react";

const DynamicPage = () => {
  const { slug } = useParams();

  if (!slug)
    return (
      <div className="mt-10 flex grow justify-center">
        <Spinner width="30" height="30" />
      </div>
    );

  return <PageRenderer slug={slug} />;
};

export default DynamicPage;
