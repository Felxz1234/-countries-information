import { BrowserRouter,Route,Routes } from "react-router-dom"
import Main from "./components/main/main"
import PaisDetail from "./components/paisdetail/PaisDetail"

export default function Router(){
    return(
        <div className="routes">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Main/>} />
                  <Route path="paisdetail" element={<PaisDetail/>}></Route>
               </Routes>
            </BrowserRouter>
        </div>
    )
}