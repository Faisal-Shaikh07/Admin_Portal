import { CssBaseline } from "@mui/material";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout />
    </BrowserRouter>
  );
}

export default App;