// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// const UseState1 = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UseState1 />);

// export default UseState1;

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function UseState1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseState1 />);
export default UseState1;