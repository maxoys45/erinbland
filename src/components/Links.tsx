import { type Link as LinkType } from "../@types/context";

const Links = ({ links }: { links: LinkType[] }) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-2 md:mt-8">
      {links.map((link, idx) => (
        <a
          className=""
          key={idx}
          href={link.url.includes("@") ? `mailto:${link.url}` : link.url}
          target="_blank"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Links;
