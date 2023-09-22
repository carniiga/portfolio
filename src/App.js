import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/Routes";
function App() {
  
  return (
   <>
   <BrowserRouter>
   <GlobalStyles/>
   <Routes/>
   </BrowserRouter>

   </>
  );
}

export default App;
