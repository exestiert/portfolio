import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from "./routes"


function App() {
  return (
   <BrowserRouter>
   <Routes>
{routes.map((route)=>{
  return(
    <Route key={route.id} {...route}/>
  )
})}
   </Routes>
   </BrowserRouter>
  );
}

export default App;
