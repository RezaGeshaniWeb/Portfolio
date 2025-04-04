import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Work from "./components/Work";

export default function App() {
  return (
    <main className="font-display bg-black">
      <Header />
      <Profile />
      <About />
      <Work />
      <Contact />
    </main>
  )
}