import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Main} from "./components/Main";
import {TheOne} from "./components/TheOne";
import {ClothesPage} from "./components/ClothesPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/clothes' element={<TheOne/>}/>
                    <Route path='/clothes/:id' element={<ClothesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
