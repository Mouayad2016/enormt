import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

type CustomButtonProps = {
  className?: string;
  pageSettings?: object;
  utm?: object;
  prefill?: object;
};

const CustomButtonExample: React.FC<CustomButtonProps> = ({ className, pageSettings, utm, prefill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElem, setRootElem] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // This will only run on the client-side after the component is mounted.
    setRootElem(document.getElementById("root"));
  }, []);

  return (
    <>
{/* <Link href="/" passHref> */}
  <a onClick={(e) => {
    e.preventDefault();
    setIsOpen(true);
  }} className={className}>
    Boka ett möte
  </a>
{/* </Link> */}
      {rootElem && (
        <PopupModal
          url="https://calendly.com/mouayadmouayad98/30min"
          pageSettings={pageSettings}
          utm={utm}
          prefill={prefill}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElem} // using the state variable here
        />
      )}
    </>
  );
}

export default CustomButtonExample;
