import {useCallback, useState} from 'react';
import './App.css';
import {Header} from '../features/Header/Header';
import {Main} from '../features/MainPage/Main';
import {Skills} from '../features/SkillsPage/Skills';
import {Projects} from '../features/ProjectsPage/Projects';
import {Contact} from '../features/ContactPage/Contact';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Sidebar} from '../features/Sidebar/Sidebar';
import {PATH} from "../common/constants/constants";

function App() {
    const [open, setOpen] = useState(false)
    const handleClose = useCallback(() => setOpen(false), [])
    const handleOpen = useCallback(() => setOpen(true), [])
    return (
        <div className='App'>
            <Header handleOpen={handleOpen}/>
            <Sidebar open={open} handleClose={handleClose}/>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
                <Route path={PATH.PROJECTS} element={<Projects/>}/>
                <Route path={PATH.CONTACT} element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
