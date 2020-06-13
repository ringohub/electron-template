import React, { useEffect, useState } from "react";

const DragSpace: React.FC = () => {
  const [hash, setHash] = useState("/");

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
      console.log(`hash = ${window.location.hash}`);
    });
  });

  return (
    <div>
      <p>{hash}</p>
      <style jsx>{`
        p {
          margin: 0px;
          margin-left: 80px;
          font-size: 0.9rem;
        }
        div {
          -webkit-app-region: drag;
          min-height: 24px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default DragSpace;
