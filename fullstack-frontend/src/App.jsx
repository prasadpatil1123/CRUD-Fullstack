import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/adduser" element={<AddUser/>} />
          <Route exact path="/edituser/:id" element={<EditUser/>} />
          <Route exact path="/viewUser/:id" element={<ViewUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
