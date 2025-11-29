import ReactDOM from 'react-dom/client';
import React, {useEffect} from 'react';
// import { render } from "react-dom";
import App from "./App";


// const [key, setKey] = React.useState('');



//
// function TrackKeyboard() {
//     useEffect(() => {
//         function handleKeyDown(e) {
//             console.log(e.target);
//             console.log(e.keyCode);
//             setKey(e.keyCode);
//         }
//
//         document.addEventListener("keydown", handleKeyDown);
//
//         return function cleanup() {
//             document.removeEventListener("keydown", handleKeyDown);
//         };
//     }, []);
//
//     return (
//         <div tabindex="0">
//             foo
//         </div>
//     );
// }

// render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App/>
        {/*<TrackKeyboard></TrackKeyboard>*/}
    </>


);