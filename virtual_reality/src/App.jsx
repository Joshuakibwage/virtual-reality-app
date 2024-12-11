import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

 const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><HeroSection /></>
  },
  {
    path:'/features',
    element:<><Navbar /><FeatureSection  /></>
  },  {
    path:'/workflow',
    element:<><Workflow  /></>
  },
  {
    path:'/pricing',
    element:<><Pricing  /></>
  },
  {
    path:'/testimonials',
    element:<><Testimonials  /></>
  },
 ]);

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
