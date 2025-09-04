const Header = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <>
      <title>{`Erin Bland${title && ` - ${title}`}`}</title>

      {title && (
        <h1 className="mb-4 text-center whitespace-pre-line">{title}</h1>
      )}

      {description && (
        <p className="mx-auto max-w-4xl text-center text-sm whitespace-pre-line italic md:text-lg">
          {description}
        </p>
      )}
    </>
  );
};

export default Header;
