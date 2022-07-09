import './App.css';
import { Header } from './shared/Components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/homepage/Homepage';
import ProjectContainer from './pages/homepage/project/ProjectContainer';
import SkillsContainer from './pages/homepage/skills/SkillsContainer';
import Footer from './shared/Components/Footer/Footer'
function App() {
    return ( 
        
        <div className = 'App'>
        <BrowserRouter >
        <Header />
        <Routes>
        <Route path = "/" element = { <Homepage /> }/>
        <Route path="/project" element={<ProjectContainer />} />
        <Route path="/skills" element={<SkillsContainer />} />
         </Routes> 
         
         </BrowserRouter>
         
         <div className='project_container'><h1>PROJECTS </h1></div>
         <ProjectContainer />
         
         <div className = "skills_container">
         <h1>Skills</h1>
         <SkillsContainer /></div>
        
        
         <div className = 'footer_Container'>
            <Footer />
         </div>
        </div>
    );
}

export default App