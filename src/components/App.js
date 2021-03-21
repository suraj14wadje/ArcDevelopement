import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./ui/footer";
import theme from "./ui/theme";

const { default: Header } = require("./ui/header");

const routes = [
  "/",
  "/services",
  "/revolution",
  "/about",
  "/contact",
  "/appDevelopeMent",
  "/mobileDevelopement",
  "/websiteDevelopement",
];

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />

        <Switch>
          {routes.map((r) => (
            <Route exact path={r} key={r} component={() => <div>{r}</div>} />
          ))}
        </Switch>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
