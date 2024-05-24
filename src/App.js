import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import Admin from "./Components/Admin";
import Context from "./context";
import Hoc from './HOC/hoc'
function App() {
    const [Loading, SetLoading] = useState(true);
    const[user,SetUser]=useState(null);

    useEffect(() => {
        SetLoading(true)

        setTimeout(() => {
                SetLoading(false)

            }
            , 500)
    }, [])

    return (
        // <Context.Consumer>
            <>
                {Loading ? (
                    <div className="loader">
                        Загрузка...
                    </div>
                ) : (
                    <div>

                        <Lottie className="bg" loop={true}/>
                        <Lottie className="bgtwo" loop={true}/>
                        <Lottie className="bgtemp" loop={true}/>

                        <Nav user={user}/>
                        <MoveToTop/>

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/About" element={<About/>}/>
                            <Route path="/Project" element={<Project  user={user}/>}/>
                            <Route path="/Resume" element={<Resume/>}/>
                            <Route path="/admin" element={<Admin user={user} setUser={SetUser}/>}/>
                        </Routes>

                        <Footer/>
                    </div>
                )}
            </>
        // </Context.Consumer>
    );
}

export default App;
