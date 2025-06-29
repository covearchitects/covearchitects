
import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function App() {
  return (
    <>
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200">
        <div className="text-2xl font-bold text-red-600">COVE</div>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="bg-white text-black min-h-screen">
        <section className="py-20 text-center bg-gray-100">
          <h1 className="text-5xl font-bold tracking-wide text-red-600">COVE Architects</h1>
          <p className="mt-4 text-xl text-gray-700">We handhold Societies through the entire journey of redevelopment right till you come back to your new home.</p>
          <Button className="mt-6 text-white bg-red-600 hover:bg-red-700">Let’s Discuss Your Society’s Future</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <p>COVE Architects © {new Date().getFullYear()} | All rights reserved</p>
      </footer>
    </>
  );
}
