import './App.css';
// import ResumeContent from './components/ResumeContent';
import Sidebar from './components/Sidebar'
// import Skills from './components/Skills'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import TabView from './components/Tabview'
import 'normalize.css';


function App() {
  return (
    <> 
    {/* <ResumeContent/> */}
    <Sidebar/>
    <Footer/>
    <Footer2/>
    <TabView/>
    {/* <Skills/> */}
    </>
    );
}

export default App;
