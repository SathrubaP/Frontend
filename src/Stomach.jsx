import {useContext} from "react";
import { nameContext } from "./App";
//  function Stomach() {
//     let name=useContext(nameContext);
//   return (
//     <div>
//       <h1>Stomach:{name}</h1>
//     </div>
//   );
// }
// export default Stomach;



import React from 'react';

function Stomach({ color }) {
    let name=useContext(nameContext);
  return (
    <>
      <style>
        {`
          .custom-button {
            background-color: #4CAF50; /* Green background */
            border: none;
            color: white; /* White text */
            padding: 15px 32px; /* Padding */
            text-align: center; /* Centered text */
            text-decoration: none; /* No underline */
            display: inline-block; /* Inline-block */
            font-size: 16px; /* Font size */
            margin: 4px 2px; /* Margin */
            cursor: pointer; /* Pointer cursor on hover */
            border-radius: 12px; /* Rounded corners */
          }

          .custom-button:hover {
            background-color: #45a049; /* Darker green on hover */
          }

          .stomach-content {
            color: ${color}; /* Use the passed color prop */
          }
        `}
      </style>
      <div className="stomach-content">
        <h1>Stomach{name}</h1>
      </div>
    </>
  );
}

export default Stomach;