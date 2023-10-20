import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import { useRef } from 'react';

type CustomButtonProps = {
  className?: string;
  pageSettings?: object;
  utm?: object;
  prefill?: object;
};

const CustomButtonExample: React.FC<CustomButtonProps> = ({
  className,
  pageSettings,
  utm,
  prefill,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootElemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      rootElemRef.current = document.getElementById('__next');
    }
  }, []);

  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className={className}
      >
        Boka ett möte
      </a>
      {
        <PopupModal
          url={process.env.NEXT_PUBLIC_CALENDLY_LINK!}
          pageSettings={pageSettings}
          utm={utm}
          prefill={prefill}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElemRef.current!} // using the state variable here
        />
      }
    </>
  );
};

export default CustomButtonExample;
