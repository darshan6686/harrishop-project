import React from "react";
import "./App.css";
import Home from "./Home/Home";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./About/About";
import Shop from "./Shop/Shop";
import Error from "./Pages/Error/Error";
import Faqs from "./Pages/Faqs/Faqs";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Forget from "./Pages/Forget/Forget";
import Mycart from "./Pages/Mycart/Mycart";
import Mywhistlist from "./Pages/Mywhishlist/Mywhistlist";
import Chekout from "./Pages/Checkout/Chekout";
import ContactUs from "./ContactUs/ContactUs";
import Header from "./Header/Header";
import Fotter from "./Fotter/Fotter";
import Topselling from "./Home/Sectionn3/Topselling";
import Bestselling from "./Home/Sectionn3/Bestselling";
import Latestproduct from "./Home/Sectionn3/Latestproduct";
import Question from "./Pages/Faqs/Question";
import Communti from "./Pages/Faqs/Communti";
import Support from "./Pages/Faqs/Support";
import store from "./Saga/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' element={<Topselling />}></Route>
                    <Route path='Bestselling' element={<Bestselling />}></Route>
                    <Route path='Latestproduct' element={<Latestproduct />}></Route>
                </Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Error' element={<Error />}></Route>
                <Route path='/Faqs' element={<Faqs />}>
                    <Route path="Question" element={<Question />}></Route>
                    <Route path="Communti" element={<Communti />}></Route>
                    <Route path="Support" element={<Support />}></Route>
                </Route>
                <Route path='/Privacy' element={<Privacy />}></Route>
                <Route path='/Terms' element={<Terms />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Register' element={<Register />}></Route>
                <Route path='/Forget' element={<Forget />}></Route>
                <Route path='/Mycart' element={<Mycart />}></Route>
                <Route path='/Mywhistlist' element={<Mywhistlist />}></Route>
                <Route path='/Checkout' element={<Chekout />}></Route>
                <Route path='/Shop' element={<Shop />}></Route>
                <Route path='/ContactUs' element={<ContactUs />}></Route>
            </Routes>
            <Fotter></Fotter>
        </BrowserRouter>
    </Provider>
    );
}

export default App;