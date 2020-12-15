import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import TopNavbar from "./Components/TopNavbar";
import { Container } from "@chakra-ui/react";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Container maxW="5xl" padding="10">
        <TopNavbar />
        <Body />
      </Container>
    </div>
  );
}

export default App;
