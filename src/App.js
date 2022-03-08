import Sidebar from "./components/Sidebar";
import {Route, Routes} from 'react-router-dom'
import routes from "./routes/routes";
import { Container } from "./styles/appStyle";
function App() {
  return (
    <Container>
      <Sidebar/>
      <Routes>
        {routes.map(route=>{
          return(
            <Route {...route}/>
          )
        })}
      </Routes>
    </Container>
  );
}

export default App;
