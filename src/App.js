import { useSelector } from "react-redux";

import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/Routes";
function App() {
  const {clicked} =  useSelector(state => state.toggleReducer)
  
  return (
   <>
   <BrowserRouter>
   <GlobalStyles isTrue = {clicked}/>
   <Routes/>
   </BrowserRouter>

   </>
  );
}

export default App;
