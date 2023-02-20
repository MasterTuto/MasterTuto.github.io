import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import AboutMe from "../screens/AboutMe"
import Contact from "../screens/Contact"
import Experience from "../screens/Experience"
import Experiments from "../screens/Experiments"
import Home from "../screens/Home"
import Projects from "../screens/Projects"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout /> }>
          <Route path="/" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="experiments" element={<Experiments />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}