
import './App.css'
import BoatPage from './pages/boat';
import CharacterPage from './pages/character';
import DetailPage from './pages/detailfruit';
import FavoriteFruitPage from './pages/favoritefruit';
import FruitsPage from './pages/fruits';
import HomePage from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage />
      ,
    },
    {
      path: "/fruits",
      element: <FruitsPage/>
      ,
    },
    {
      path: "/favoritefruit",
      element: <FavoriteFruitPage/>
      ,
    },
    {
      path: "/fruit/:id", 
      element: <DetailPage />,
    },
    {
      path: "/character", 
      element: <CharacterPage />,
    },
    {
      path: "/boat", 
      element: <BoatPage />,
    },
  ],
  { basename: import.meta.env.DEV ? '/' : '/Onepiecewiki/' });

  return (
    <div className="bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-fixed min-h-screen w-full">
    <RouterProvider router={router} />
  </div>
  )
}

export default App
