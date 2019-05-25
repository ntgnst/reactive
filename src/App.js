import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";

import Contact from "./components/contact/Contact";
import ErrorHandler from "./components/ErrorHandler";
import FetchData from "./components/FetchData";
import FormSample from "./components/FormSample";
import Layout from "./components/layout/Layout";
import OldPage from "./components/OldPage";
import Page404 from "./components/layout/Page404";
import ReduxTodos from "./components/ReduxTodos";
import store from "./redux/store";
import TryingHOCComponent from "./components/TryingHOCComponent";
import TwoWayBinding from "./components/TwoWayBinding";
import logo from "./logo.svg";
import ReduxAlbums from "./components/ReduxAlbums";

const ReduxPhotos = React.lazy(() => import("./components/ReduxPhotos"));
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ErrorHandler>
          <Layout>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => {
                  return (
                    <div
                      style={{
                        boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)",
                        transition: "0.3s",
                        width: "100%"
                      }}
                    >
                      <h2>Home Page</h2>
                      <img src={logo} alt="logo" style={{ width: 250 }} />
                      <ReduxAlbums />
                      <ReduxTodos />
                      <React.Suspense fallback={<div>Loading....</div>}>
                        <ReduxPhotos />
                      </React.Suspense>
                    </div>
                  );
                }}
              />
              <Route
                path="/contact"
                exect={true}
                stict={true}
                component={Contact}
              />
              <Route path="/form" component={FormSample} />
              <Route path="/fetch/:type" component={FetchData} />
              <Route path="/twb" component={TwoWayBinding} />
              <Route path="/old" component={OldPage} />
              <Route path="/hoc" component={TryingHOCComponent} />
              <Route component={Page404} />
            </Switch>
          </Layout>
        </ErrorHandler>
      </Router>
    </Provider>
  );
}

export default App;
