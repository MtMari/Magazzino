import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WrapperRoute from './routes/WrapperRoute';
import HomeRoute from './routes/HomeRoute';
import OrdersRoute from './routes/OrdersRoute';

export const server = "http://127.0.0.1:8000";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WrapperRoute></WrapperRoute>,
      children:
      [
        {
          index: true,
          element: <HomeRoute></HomeRoute>
        },
        {
          path: "/orders",
          element: <OrdersRoute></OrdersRoute>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={ router }></RouterProvider>
    </>
  )
}

export default App
