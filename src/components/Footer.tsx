import copy from "../content/copy.json";

const Footer = () => {
  return (
    <footer className="mt-auto border-t-1 border-t-gray-200 py-6 text-sm leading-none max-md:-mx-4 max-md:px-4 md:py-8">
      {copy.general.copyright} {/*new Date().getFullYear()*/}
    </footer>
  );
};

export default Footer;
