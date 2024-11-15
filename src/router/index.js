import React from 'react';
import Layout from '../pages/Layout'
import Products from '../pages/Products'
import Capabilities from '../pages/Capabilities'
import Sustainability from '../pages/Sustainability'
import Aboutus from '../pages/Aboutus'
import ProductDetail from '../components/productdetail'
import Contactus from '../pages/Contactus'
import Nonwoven from '../pages/Nonwoven'
import Biodegradable from '../pages/Biodegradable'
import Vacuumbag from '../pages/Vacuumbag'
import Film from '../pages/Films'
import SearchPage from '../pages/search'

import { createBrowserRouter } from 'react-router-dom'

// import ProductList from '../api/productList';
// import ProductDetail from '../api/productDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/capabilities",
        element: <Capabilities />
    },
    {
        path: "/sustainability",
        element: <Sustainability />
    },
    {
        path: "/aboutus",
        element: <Aboutus />
    },
    {
        path: "/nonwovenbags/:productId",
        element: <ProductDetail />
    },
    {
        path: "/contactus",
        element: <Contactus />
    },
    {
        path: "/nonwovenbags",
        element: <Nonwoven />
    },
    {
        path: "/biodegradablebags",
        element: <Biodegradable />
    },
    {
        path: "/vacuumtriplelayersbags",
        element: <Vacuumbag />
    },
    {
        path: "/films",
        element: <Film />
    },
    {
        path: "/search",
        element: <SearchPage  />
    },
])

export default router