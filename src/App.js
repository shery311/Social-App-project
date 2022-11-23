import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import Leftbar from "./Components/leftbar/Leftbar";
import Rightbar from "./Components/rightbar/Rightbar";
import { 
  Routes, 
  Route, 
  Outlet, 
  Navigate } from "react-router-dom";
  import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./Components/Context/darkModeContext";
import { AuthContext } from "./Components/Context/authContext";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';


function App() {

const {currentUser} = useContext(AuthContext);

const {darkMode} = useContext(DarkModeContext);

const queryClient = new QueryClient()


const Layout =() =>{
  return(

    <QueryClientProvider client={queryClient}>
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Leftbar/>
        <div style={{flex:6}}>
        <Outlet/>
        </div> 
        <Rightbar/>
      </div>
    </div>
    </QueryClientProvider>
  );
};

const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to="/login"/>;
  }

  return children;

}
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
            <Layout/>
          </ProtectedRoute>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
