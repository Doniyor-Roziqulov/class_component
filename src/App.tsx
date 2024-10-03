import { Route, Routes } from "react-router-dom";
import Pro from "./components/Pro";
import Layout from "./pages/layout/Layout";
import Detail from "./pages/detail/Detail";
import Hero from "./components/hero/Hero";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="products" element={<Pro />} />
                    <Route path="" element={<Hero />} />
                    <Route path="product/:proId" element={<Detail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
