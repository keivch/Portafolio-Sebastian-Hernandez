import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Study from "./components/Study";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-900">
      <Navbar />
      <main>
        <Header />
        <Experience />
        <Technologies />
        <Study />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
