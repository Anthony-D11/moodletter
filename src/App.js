import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState, useEffect, createContext} from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Campaign from './pages/Campaign';
import NewsletterTemplate from './components/NewsletterTemplate';
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import CampaignCollection from "./pages/CampaignCollection";
import RecipientGroupCollection from "./pages/RecipientGroupCollection";

export const AuthContext = createContext();
function App() {
  const [userState, setUserState] = useState({});

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ userState, setUserState }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/create-campaign" element={<Campaign/>}/>
          <Route path="/campaign-collection" element={<CampaignCollection/>}/>
          <Route path="/recipient-group-collection" element={<RecipientGroupCollection/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
