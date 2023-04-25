import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import './App.css';

import {EVENT_URL, MAIN_URL, PERSON_URL, TYPE_URL} from "./core/service/urls";

import Page404 from "./error/Page404";

import {MainPageWrapper} from "./main/core/wrapper/MainPageWrapper";
import {MainPageWrapperContext} from "./main/core/wrapper/core/context/MainPageWrapperContext";
import MainPage from "./main/main/MainPage";
import TypeDetailPage from "./main/type_detail/TypeDetailPage";
import EventDetailPage from "./main/event_detail/EventDetailPage";
import PersonDetailPage from "./main/person_detail/PersonDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Page404/>}/>

                <Route element={
                    <MainPageWrapper MainPageWrapperContext={MainPageWrapperContext}>
                        <Outlet/>
                    </MainPageWrapper>
                }>
                    <Route path={MAIN_URL} element={<MainPage/>}/>
                    <Route path={`${TYPE_URL}/:path`} element={<TypeDetailPage/>}/>
                    <Route path={`${EVENT_URL}/:path`} element={<EventDetailPage/>}/>
                    <Route path={`${PERSON_URL}/:path`} element={<PersonDetailPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
