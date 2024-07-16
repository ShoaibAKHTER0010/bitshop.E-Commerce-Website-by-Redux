"use client"
import Discover from "./components/Discover";
import  Main  from "./components/Main";
import Navbar from "./components/Navbar";
import Wedding from "./components/Wedding";
import Winter from "./components/Winter";


export default function Home() {
  return (
    <main className="bg-[#b66087]">
  <Navbar/>
  <Main/>
  <Wedding/>
  <Winter/>
  <Discover/>
    </main>
  );
}
