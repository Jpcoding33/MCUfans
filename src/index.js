import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Application from './components/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './pages/home/home';
import Ironman from './pages/ironman/ironman';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Application />}>
                    <Route index element={<Home />} />
                    <Route path="ironman" element={<Ironman />} />
                    {/* <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); 

reportWebVitals();
