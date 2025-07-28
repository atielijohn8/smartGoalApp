import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Home from './components/Home';    
import Update from './components/Update';  
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/create' element={<Create/>}></Route>
                <Route path="/update/:id" element={<Update />} />
                <Route path='/read/:id' element={<Read/>}></Route>

            </Routes>

        </BrowserRouter>
    )
}

export default App;