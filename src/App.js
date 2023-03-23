import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Submission from "./routes/Submission";
import Committee from "./routes/Committees";
import Tracks from "./routes/Call_for_Paper";
import Contact from "./routes/Contact";
export default function App(){ 
    return (
        <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path ="/"element={<Home/>}/>
            <Route path ="/submission"element={<Submission/>}/>
            <Route path ="/committee"element={<Committee/>}/>
            <Route path ="/track"element={<Tracks/>}/>
            <Route path ="/contact"element={<Contact/>}/>
          </Routes>
          </BrowserRouter>
          </div>
    );
}