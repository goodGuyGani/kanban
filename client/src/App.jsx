import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return <div>Kanban App</div>;
}

export default App;
