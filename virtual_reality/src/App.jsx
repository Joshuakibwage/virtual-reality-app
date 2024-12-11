import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

 const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><HeroSection /></>
  }
 ]);

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
