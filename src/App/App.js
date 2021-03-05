import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { IoMdAdd } from "react-icons/io";

function App() {
  return (
    <div className="bg-light">
      <div className="container py-4  min-vh-100">
        <Header />
        <Body />
        <button className="btn float-btn btn-primary d-flex align-items-center">
          <IoMdAdd className="display-7" />
        </button>
      </div>
    </div>
  );
}

export default App;
