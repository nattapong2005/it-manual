import React from "react";

const Slide = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <iframe
        src="https://www.canva.com/design/DAGwYj0PDMQ/ODq9fEtmY2zbifRxjloGYw/view?embed"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Slide;
