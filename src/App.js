import './App.css';
import { Header } from './shared/Components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/homepage/Homepage';
import ProjectContainer from './pages/homepage/project/ProjectContainer';
import SkillsContainer from './pages/homepage/skills/SkillsContainer';
import AchiveContain from './pages/homepage/achivements/AchiveContain';

function App() {
    return ( 
        
        <div className = 'App'>
        <BrowserRouter >
        <Header />
        <Routes>
        <Route path = "/" element = { <Homepage /> }/>
        <Route path="/project" element={<ProjectContainer />} />
        <Route path="/skills" element={<SkillsContainer />} />
        <Route path="/achivements" element={<AchiveContain />} />
         </Routes> 
         
         </BrowserRouter>
         
        </div>
    );
}

export default App