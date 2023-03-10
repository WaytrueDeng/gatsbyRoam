import React from "react";
import Reference from "./reference";

import "./references-block.css";

const ReferencesBlock = ({ references }) => {
  if (!references.length) {
    return null;
  }

  return (
    <div className="references-block">
      <h4>Referred in</h4>
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
    </div>
  );
};

export default ReferencesBlock;
