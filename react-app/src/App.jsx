import Container from "./components/Container";
import Header from "./components/Header";
import Frame from "./components/Frame";
import Left from "./components/Left";
import Content from "./components/Content";
import Right from "./components/Right";
import Footer from "./components/Footer";
import KULogo from "./assets/imgs/KU.png";
import Data from "./data.json";
import "./App.css";
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    <Container>
      <Header title={"ku house"} img={KULogo} />
      <Frame>
        <Left />
        <Content title={"introductions"} text={Data.content} />
        <Right title={"user guide"} text={Data.guide} />
      </Frame>
      <Footer />
    </Container>
  );
};

export default App;
