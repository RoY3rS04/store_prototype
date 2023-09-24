import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Shop from './routes/Shop.tsx';
import { loader as productsLoader } from './routes/Shop.tsx';
import { loader as productLoader } from './routes/Product.tsx';
import Product from './routes/Product.tsx';
import Cart from './routes/Cart.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/shop',
    element: <Shop></Shop>,
    loader: productsLoader
  },
  {
    path: '/product/:id',
    element: <Product></Product>,
    loader: async ({ params }) => {
      if (params.id) {
        return productLoader(params.id)
      }
    }
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
