import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import React, { useState } from "react";
import Contact from "./components/contact/Contact";
import ErrorHandler from "./components/ErrorHandler";
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
import FetchData from "./components/FetchData";
import Loader from "react-loader-spinner";
const ReduxPhotos = React.lazy(() => import("./components/ReduxPhotos"));
// const FetchData = React.lazy(() => import("./components/FetchData"));
const App = () => {
  const [showPhotos, setShowPhotos] = useState(false);
  const changePhotoState = () => {
    setShowPhotos(!showPhotos);
  };
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
                      <button onClick={changePhotoState}>Render Photos</button>
                      {showPhotos ? (
                        <React.Suspense
                          fallback={
                            <Loader
                              type="Puff"
                              color="#00BFFF"
                              height="100"
                              width="100"
                            />
                          }
                        >
                          <ReduxPhotos />
                        </React.Suspense>
                      ) : null}
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
};

export default App;
