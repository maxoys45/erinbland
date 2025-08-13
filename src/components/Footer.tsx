import { general } from "../content/copy.json";

const Footer = () => {
  return (
    <footer className="mt-9 border-t-1 border-t-gray-200 pt-8 pb-8 leading-none">
      {general.copyright} {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
