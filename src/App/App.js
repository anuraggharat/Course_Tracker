import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import AddTut from "./Components/AddTut";

function App() {
  return (
    <div className="bg-light">
      <div className="container py-4  min-vh-100">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
