import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Preloader from "./components/Preloader";
import Home from "./components/pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  // const bgColor = "#050505";

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      )} */}

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <Home bgColor={bgColor} /> */}
      <Home />
    </>
  );
}

export default App;
