
import './App.css';
import './style.css'
import './fontface.css'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Card from './Card';
import Enterprise from './Enterprise';
import Build from './Build';
import Certified from './Certified';
import Costumer from './Costumer';
import Learn from './Learn';
import Apply from './Apply';
import Buildai from './Buildai';
function App() {
  return (
    <div className="plasmic_page_wrapper ">
      <Header></Header>
      <Home></Home>
      
      <Card></Card>
      <Enterprise></Enterprise>
      <Buildai></Buildai>
      <Apply></Apply>
      <Learn></Learn>
      <Costumer></Costumer>
      <Certified></Certified>
      <Build></Build>
      <Footer></Footer>
    </div>
  );
}

export default App;
