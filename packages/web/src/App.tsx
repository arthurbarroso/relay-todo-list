import * as React from "react";
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import history from './routes/history';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </>
  )
}
