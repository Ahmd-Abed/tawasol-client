import React, { Fragment } from 'react';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import Navbar from './components/Navbar';
import store from './redux/store';
import { Provider } from 'react-redux';//lezm ykun 7wayla lkel
import Register from './components/Users/Register';
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlterTemplate from "react-alert-template-basic";
import Alert from "./components/Alert"
import Login from './components/Users/Login';
import Private from './components/Private';
import Home from './components/Home';
import ProfileForm from './components/ProfileForms/ProfileForm';
import AddEducation from './components/ProfileForms/AddEducation';
import AddExperience from './components/ProfileForms/AddExperience';
import { setAuthToken } from './utils';
import { loadUser } from './redux/modules/users';
import Developers from './components/Developers';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post';
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "30px",
  transitions: transitions.SCALE
}

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <AlertProvider template={AlterTemplate} {...options}>
            <Fragment>
              <Alert />
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/home' element={<Private component={Home} />} />
                <Route exact path="/create-profile" element={<Private component={ProfileForm} />} />
                <Route exact path="/add-education" element={<Private component={AddEducation} />} />
                <Route exact path="/add-experience" element={<Private component={AddExperience} />} />
                <Route exact path="/developers" element={<Private component={Developers} />} />
                <Route exact path="/profile/:id" element={<Private component={Profile} />} />
                <Route exact path="/edit-profile" element={<Private component={ProfileForm} />} />
                <Route exact path='/settings' element={<Private component={Settings} />} />
                <Route exact path="/posts" element={<Private component={Posts} />} />
                <Route exact path="/posts/:id" element={<Private component={Post} />} />
              </Routes>
            </Fragment>
          </AlertProvider>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;