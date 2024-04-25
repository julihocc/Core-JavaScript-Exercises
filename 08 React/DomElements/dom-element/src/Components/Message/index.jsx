// import { useState, useCallback, useEffect } from "react";

// export const Message = ({ message }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   useEffect(() => {
//     console.log("Message re-rendered");
//   });

//   // const handleCheckboxChange = () => {
//   //   setIsChecked(!isChecked);
//   // };

//   const handleCheckboxChange = useCallback(
//     (event) => {
//       event.preventDefault();
//       setIsChecked(!isChecked);
//     },
//     [isChecked]
//   );

//   return (
//     <div className="card p-3">
//       <h3 className="card-title">Message</h3>
//       <div className="d-flex align-items-center">
//         <div
//           className={`
//               card-body
//               ${isChecked ? "text-danger" : "text-primary"}
//             `}
//         >
//           <p className="card-text">{message}</p>
//         </div>
//         <input type="checkbox" onChange={handleCheckboxChange} />
//       </div>
//     </div>
//   );
// };

import { useRef, useEffect } from "react";

export const Message = ({ message }) => {
  const checkboxRef = useRef();

  useEffect(() => {
    console.log("Message re-rendered");
  });

  const handleCheckboxChange = () => {
    // event.preventDefault();
    if (checkboxRef.current) {
      checkboxRef.current.classList.toggle("bg-primary");
      checkboxRef.current.classList.toggle("text-white");
    }
  };

  return (
    <div ref={checkboxRef} className="card p-3">
      <h3 className="card-title">Message</h3>
      <div className="d-flex align-items-center">
        <p className="card-body">{message}</p>
        <input type="checkbox" id="colorize" onChange={handleCheckboxChange} />
      </div>
    </div>
  );
};
