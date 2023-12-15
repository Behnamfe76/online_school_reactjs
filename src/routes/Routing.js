import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;