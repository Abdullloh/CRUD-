import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import { Container } from "./styles/appStyle";
import { useEffect, useState } from "react";
import { BurgerStyle } from "./styles/BurgerStyle";
function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const handleSize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);
  return (
    <Container>
      {innerWidth > 768 ? null : (
        <BurgerStyle onClick={() => setOpen(!open)}>
          {" "}
          <span></span>
          <span></span>
          <span></span>
        </BurgerStyle>
      )}

      {innerWidth > 768 ? (
        <Sidebar setOpen={setOpen} />
      ) : open ? (
        <Sidebar setOpen={setOpen} />
      ) : null}
      {/* <Sidebar /> */}
      <Routes>
        {routes.map((route) => {
          return <Route {...route} />;
        })}
      </Routes>
    </Container>
  );
}

export default App;
