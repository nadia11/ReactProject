import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import FrontPage from "./FrontPage";
import Navbar from "./Navbar";

import { CssBaseline } from "@mui/material";
import {
  Container,
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Container>
        <Navbar />

        <FrontPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
