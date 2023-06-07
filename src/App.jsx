import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import DoubleFerrule from './pages/Products/DoubleFerrule';
import DoubleFerruleProducts from './pages/Products/DoubleFerruleProducts';
import PipeFitting from './pages/Products/PipeFitting';
import PipeFittingProducts from './pages/Products/PipeFittingProducts';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import './App.scss';
import NeedelValve from './pages/NeedleValve/NeedelValve';
import MiniSeries from './pages/NeedleValve/MiniSeries';
import NeedleValveProduct from './pages/NeedleValve/NeedleValveProduct';
import Manifold from './pages/ManifoldValve/Manifold';
import ManifoldDetails from './pages/ManifoldValve/ManifoldDetails';
import ThermoWell from './pages/ThermoWell/ThermoWell';
import ThermowellDetails from './pages/ThermoWell/ThermowellDetails';
import CheckValve from './pages/CheckValve/CheckValve';
import CheckValveDetails from './pages/CheckValve/CheckValveDetails';
import PressureGauge from './pages/PressureGauge/PressureGauge';
import BallValve from './pages/BallValve/BallValve';
import BallValveType from './pages/BallValve/BallValveType';
import BallValveDetails from './pages/BallValve/BallValveDetails';
import FlairConnector from './pages/FlairConnector/FlairConnector';
import FlairConnectorDetails from './pages/FlairConnector/FlairConnectorDetails';
import WeldFitting from './pages/WeldFitting/WeldFitting';
import WeldFittingDetails from './pages/WeldFitting/WeldFittingDetails';

function App() {
    const Layout = () => {
        return(
          <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element:<Layout />,
            children:[
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/services',
                    element: <Services />
                },
                {
                    path: '/doubleferrule',
                    element: <DoubleFerrule />
                },
                {
                    path: '/doubleferrule/:id',
                    element: <DoubleFerruleProducts />
                },
                {
                    path: '/pipefitting',
                    element: <PipeFitting />
                },
                {
                    path: '/pipefitting/:id',
                    element: <PipeFittingProducts />
                },
                {
                    path: '/needleValve',
                    element: <NeedelValve />
                },
                {
                    path: '/needleValve/:series',
                    element: <MiniSeries />
                },
                {
                    path: '/:series/:id',
                    element: <NeedleValveProduct />
                },
                {
                    path: '/manifoldValve',
                    element: <Manifold />
                },
                {
                    path: '/manifold/:id',
                    element: <ManifoldDetails />
                },
                {
                    path: '/thermowell',
                    element: <ThermoWell />
                },
                {
                    path: '/thermowell/:id',
                    element: <ThermowellDetails />
                },
                {
                    path: '/checkValve',
                    element: <CheckValve />
                },
                {
                    path: '/checkValve/:id',
                    element: <CheckValveDetails />
                },
                {
                    path: '/pressureGauge',
                    element: <PressureGauge />
                },
                {
                    path: '/ballvalve',
                    element: <BallValve />
                },
                {
                    path: '/ballvalve/:type',
                    element: <BallValveType />
                },
                {
                    path: '/ballvalve/:type/:id',
                    element: <BallValveDetails />
                },
                {
                    path: '/flairconnector',
                    element: <FlairConnector />
                },
                {
                    path: '/flairConnector/:id',
                    element: <FlairConnectorDetails />
                },
                {
                    path: '/weldfitting',
                    element: <WeldFitting />
                },
                {
                    path: '/weldfitting/:id',
                    element: <WeldFittingDetails />
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
