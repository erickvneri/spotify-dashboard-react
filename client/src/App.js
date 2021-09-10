import "./App.css";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Pages
import OAuthPage from "./pages/OAuthPage";
import Loading from "./pages/Loading";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Root path */}
          <Route exact strict path="/oauth">
            <Page children={<OAuthPage />}></Page>
          </Route>

          {/* OAuth path */}
          <Route exact strict path="/home">
            <Page fallback={<Loading />}>{<LazyHome />}</Page>
          </Route>

          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
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
