import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Campaign from './pages/Campaign';
import NewsletterTemplate from './components/NewsletterTemplate';
function App() {
  return (
    <>
      <Navbar/>
      <NewsletterTemplate/>
    </>
  );
}

export default App;
