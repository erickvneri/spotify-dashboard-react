import "./App.scss";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Switch as SwitchButton } from "@material-ui/core";

// endpoint constants
import endpoint from "./lib/endpoint";

import { useState } from "react";
import { themes, ThemeContext } from "./ThemeContext";

// Pages
import OAuthPage from "./pages/OAuthPage";
import Loading from "./pages/Loading";

const App = () => {
  const [theme, setTheme] = useState({ theme: themes.dark });
  const toggleTheme = (e) => {
    console.log(e.currentTarget);
    setTheme((theme) => (theme === themes.dark ? themes.light : themes.dark));
  };
  console.log(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app-container">
        <Router>
          <SwitchButton onChange={toggleTheme} style={{ width: "1em" }} />
          <Switch>
            {/* Root path */}
            <Route exact strict path={endpoint.OAUTH}>
              <Page children={<OAuthPage />}></Page>
            </Route>

            {/* OAuth path */}
            <Route exact strict path={endpoint.HOME}>
              <Page fallback={<Loading />}>{<LazyHome />}</Page>
            </Route>

            <Redirect to={endpoint.HOME} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

const Page = ({ children, fallback }) => {
  return (
    <div className="Page">
      <Suspense fallback={fallback || null}>{children}</Suspense>
    </div>
  );
};

const LazyHome = lazy(
  () =>
    new Promise((resolve, _) =>
      setTimeout(() => resolve(import("./pages/Home")), 2 * 1000)
    )
);

export default App;
