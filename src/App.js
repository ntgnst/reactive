import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import Contact from "./components/contact/Contact";
import ErrorHandler from "./components/ErrorHandler";
import FormSample from "./components/FormSample";
import withAnalytics from "./components/withAnalytics";
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
import ReduxPhotos from "./components/ReduxPhotos";
import CustomLoader from "./components/CustomLoader";

const App = () => {
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
                      <ReduxPhotos fallback={<CustomLoader />} />
                    </div>
                  );
                }}
              />
              <Route
                path="/contact"
                exect={true}
                stict={true}
                component={withAnalytics(Contact)}
              />
              <Route path="/form" component={withAnalytics(FormSample)} />
              <Route path="/fetch/:type" component={withAnalytics(FetchData)} />
              <Route path="/twb" component={withAnalytics(TwoWayBinding)} />
              <Route path="/old" component={withAnalytics(OldPage)} />
              <Route path="/hoc" component={withAnalytics(TryingHOCComponent)} />
              <Route component={Page404} />
            </Switch>
          </Layout>
        </ErrorHandler>
      </Router>
    </Provider>
  );
};

export default App;
