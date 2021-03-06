import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-light App">
      <div className="container py-4  min-vh-100">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
