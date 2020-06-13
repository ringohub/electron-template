import React from "react";

interface Props {
  location: string;
}

const DragSpace: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <p>{location}</p>
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
