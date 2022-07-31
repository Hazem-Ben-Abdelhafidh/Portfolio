import AppRoutes from "./Components/AppRoutes";
import Header from "./Components/Header/Header";
import ReactGA from "react-ga4";
function App() {
  ReactGA.initialize("G-9VXVDGCJ5B");
  ReactGA.send("pageview");

  return (
    <div className=" text-gray-700">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
