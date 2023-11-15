import React, { useState, useEffect } from 'react';

function ChatBubbleComponent() {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const loaderElement = document.querySelector('.cube-loader');

    if (iframeLoaded && loaderElement) {
      // Stop the animation
      loaderElement.classList.add('stop-animation');
    } else if (loaderElement) {
      loaderElement.classList.remove('stop-animation');
    }
  }, [iframeLoaded]);

  useEffect(() => {
    if (!iframeLoaded) {
      setIsAnimating(true); // start the animation
    } else {
      setIsAnimating(false); // stop the animation
    }
  }, [iframeLoaded]);

  return (
    <div>
      {showIframe ? (
        <div className="bubble-chat-container">
          {!iframeLoaded ? (
            <div
              className={`loader-container ${
                iframeLoaded ? 'stop-animation' : ''
              }`}
            >
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
          <iframe
            className="bubble-chat-iframe"
            src="https://www.chatbase.co/chatbot-iframe/Tjeb9gncWK0DhUXyvbzD0"
            // frameborder="0"
            onLoad={() => setIframeLoaded(true)}
          ></iframe>
          <button
            className="bubble-close-button"
            onClick={() => {
              setShowIframe(false);
              setIframeLoaded(false);
            }}
          >
            ❌
          </button>
        </div>
      ) : (
        <button
          className="chat-bubble"
          onClick={() => setShowIframe(true)}
        ></button>
      )}
    </div>
  );
}

export default ChatBubbleComponent;
