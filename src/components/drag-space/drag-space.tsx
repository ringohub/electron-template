import React from "react";

const DragSpace = () => {
  return (
    <div>
      <style jsx>{`
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
