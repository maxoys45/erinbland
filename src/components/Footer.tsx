import copy from "../content/copy.json";

const Footer = () => {
  return (
    <footer className="mt-9 border-t-1 border-t-gray-200 pt-8 pb-8 text-sm leading-none">
      {copy.general.copyright} {/*new Date().getFullYear()*/}
    </footer>
  );
};

export default Footer;
