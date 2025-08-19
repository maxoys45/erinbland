import { type Header as HeaderType } from "../@types/context";

const HeaderBlock = ({ header }: { header: HeaderType }) => {
  const { title, description } = header;

  return (
    <>
      <title>{`Erin Bland${title && ` - ${title}`}`}</title>

      {title && <h1 className="mb-4 text-center">{title}</h1>}

      {description && (
        <p className="mx-auto max-w-3xl text-center text-sm md:text-lg">
          {description}
        </p>
      )}
    </>
  );
};

export default HeaderBlock;
