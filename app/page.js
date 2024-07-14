"use client"
import  Main  from "./components/Main";
import Navbar from "./components/Navbar";
import Wedding from "./components/Wedding";


export default function Home() {
  return (
    <main className="">
  <Navbar/>
  <Main/>
  <Wedding/>
    </main>
  );
}
