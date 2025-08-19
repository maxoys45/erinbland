import { type Link } from "../@types/context";

const LinksBlock = ({ links }: { links: Link[] }) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-2 md:mt-8">
      {links.map((link, idx) => (
        <a
          className=""
          key={idx}
          href={link.url.includes("@") ? `mailto:${link.url}` : link.url}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinksBlock;
