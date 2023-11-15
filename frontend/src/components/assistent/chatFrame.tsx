import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface type {
  id: string;
}

const Frame = () => {
  const router = useRouter();
  const { id } = router.query as any;
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  return (
    <div className="d-flex justify-content-center ptb-60 bg-white">
      <div className="chat-container justify-content-center">
        {!iframeLoaded ? (
          <div className={`loader-container`}>
            <div className="cube-loader">
              <div className="cube-top"></div>
              <div className="cube-wrapper">
                <span
                  style={{ '--i': 0 } as React.CSSProperties}
                  className="cube-span"
                ></span>
                <span
                  style={{ '--i': 1 } as React.CSSProperties}
                  className="cube-span"
                ></span>
                <span
                  style={{ '--i': 2 } as React.CSSProperties}
                  className="cube-span"
                ></span>
                <span
                  style={{ '--i': 3 } as React.CSSProperties}
                  className="cube-span"
                ></span>
              </div>
            </div>
            <div
              className={`loader-2 ${iframeLoaded ? 'stop-animation' : ''}`}
            ></div>
          </div>
        ) : (
          <></>
        )}
        <div className="text-center">
          <iframe
            className="chat-iframe"
            src={`https://www.chatbase.co/chatbot-iframe/${id}`}
            width="100%"
            onLoad={() => setIframeLoaded(true)}
            style={{ display: iframeLoaded ? 'block' : 'none' }} // Hide iframe until loaded
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Frame;
