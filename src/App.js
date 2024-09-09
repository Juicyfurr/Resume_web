// App.js
import './App.css';
// import ResumeContent from './components/ResumeContent';
import Sidebar from './components/Sidebar';
// import Skills from './components/Skills';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import TabView from './components/Tabview';
import 'normalize.css';

function App() {
  return (
    <div className="app">
      {/* <ResumeContent /> */}
      <Sidebar />
      <div className="content">
        <TabView />
      </div>
      <Footer />
      <Footer2 />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
