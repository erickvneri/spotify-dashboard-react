import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import LoginPage from "./pages/LoginPage";
import Loading from "./pages/Loading";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact strict path="/">
            <Page children={<LoginPage />}></Page>
          </Route>

          <Route exact strict path="/oauth">
            <Page fallback={<Loading />}>{<LazyPage />}</Page>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Page({ children, fallback }) {
  return (
    <div className="Page">
      <Suspense fallback={fallback || null}>{children}</Suspense>
    </div>
  );
}

const LazyPage = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./pages/MainPage")), 3 * 1000)
    )
);

export default App;
