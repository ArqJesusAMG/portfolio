import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import SliderComponent from './components/slider';
import AboutMe from './pages/about_me';
import Projects from './pages/projects';
import Work from './pages/work_experience';

function App() {
  return (
    <>
      <Navbar />
      <SliderComponent />
      <AboutMe />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
