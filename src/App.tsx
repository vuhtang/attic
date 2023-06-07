import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout";
import {Main} from "./components/pages/main/mainPage";
import {SingleBrand} from "./components/pages/brand/singleBrand";
import {ClothesPage} from "./components/pages/clothes/clothesPage";
import {ErrorPage} from "./components/pages/error/errorPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/clothes' element={<SingleBrand/>}/>
                    <Route path='/clothes/:id' element={<ClothesPage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
