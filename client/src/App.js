import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfileForm from "./components/profile-forms/ProfileForm";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
// import EditProfile from "./components/profile-forms/EditProfile";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/register"
              element={
                <section className="container">
                  <Register />
                </section>
              }
            />
            <Route
              path="/login"
              element={
                <section className="container">
                  <Login />
                </section>
              }
            />
            <Route
              path="/profiles"
              element={
                <section className="container">
                  <Profiles />
                </section>
              }
            />
            <Route
              path="/profile/:id"
              element={
                <section className="container">
                  <Profile />
                </section>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <section className="container">
                    <Dashboard />
                  </section>
                </PrivateRoute>
              }
            />
            <Route
              path="/create-profile"
              element={
                <PrivateRoute>
                  <section className="container">
                    <ProfileForm />
                  </section>
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <PrivateRoute>
                  <section className="container">
                    <ProfileForm />
                  </section>
                </PrivateRoute>
              }
            />
            <Route
              path="/add-experience"
              element={
                <PrivateRoute>
                  <section className="container">
                    <AddExperience />
                  </section>
                </PrivateRoute>
              }
            />
            <Route
              path="/add-education"
              element={
                <PrivateRoute>
                  <section className="container">
                    <AddEducation />
                  </section>
                </PrivateRoute>
              }
            />
            <Route
              path="/posts"
              element={
                <PrivateRoute>
                  <section className="container">
                    <Posts />
                  </section>
                </PrivateRoute>
              }
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
