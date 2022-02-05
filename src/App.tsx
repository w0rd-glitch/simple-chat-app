import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import React from 'react';
import './App.scss';
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Inbox from "./pages/Inbox";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/messages" element={<Messages />} />
        <Route path="/inbox" element={<Inbox />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
