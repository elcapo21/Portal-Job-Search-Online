import './App.css'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import JobComponent from './components/JobComponent';
import JobListComponent from './components/JobListComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(){
    return (
      <> 
       <BrowserRouter>
           <HeaderComponent />
             <Routes>
                {/* // http://localhost:3000  */}
                 <Route path='/' element = {<JobListComponent />} ></Route>
                 {/* // http://localhost:3000/job_details */}
                 <Route path='/job_details' element = {<JobListComponent />}></Route>
                {/* // http://localhost:3000/add-job */}
                 <Route path='/add-job' element = {<JobComponent />}></Route>
             </Routes>
           <FooterComponent />
       </BrowserRouter>
             
      
      </>
    )
}

export default App;