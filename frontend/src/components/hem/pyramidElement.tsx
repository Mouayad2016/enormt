import React, { useState } from "react";

type PyramidProps = {
  className?: string;
};
const Pyramid: React.FC<PyramidProps> = ({ className }) => {
  return (
    <div className={`${className || ''} pyramid-loader`}>
    <div className="wrapper">
      <span className="side side1"></span>
      <span className="side side2"></span>
      <span className="side side3"></span>
      <span className="side side4"></span>
      <span className="shadow"></span>
    </div>  
  </div>
  );
}
export default Pyramid;
