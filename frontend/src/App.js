import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import InterviewList from "./components/InterviewList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<InterviewList/>}/>
          <Route path="/add-user" element={<AddUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
