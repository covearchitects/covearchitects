import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function App() {
  return (
    <>
      {/* Navbar */}
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
        {/* Hero Section */}
        <section className="py-20 text-center bg-gray-100">
          <h1 className="text-5xl font-bold tracking-wide text-red-600">COVE Architects</h1>
          <p className="mt-4 text-xl text-gray-700">We handhold Societies through the entire journey of redevelopment right till you come back to your new home.</p>
          <Button className="mt-6 text-white bg-red-600 hover:bg-red-700">Let’s Discuss Your Society’s Future</Button>
        </section>

        {/* Why COVE */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose COVE?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["End-to-end Handholding", "Transparent Processes", "Proven Track Record", "Society-First Approach"].map((item, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-6 text-center font-medium">{item}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Work</h2>

          {/* Project Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {["Mayfair CHS, Bandra W", "New Friends CHS, Bandra W", "Shivdham CHS, Santacruz W", "Om Shubh Milan, Vile Parle E", "Nugget CHS, Khar W", "Waverly CHS, Santacruz W"].map((name, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-4">
                  <img src="/images/maps/map-placeholder.jpg" alt="map placeholder" className="mb-4 rounded-md" />
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm text-gray-600">Under Construction</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16 text-center">
            <img src="/images/maps/mumbai-map-cove-projects.jpg" alt="Map showing project locations" className="rounded-lg shadow-md inline-block max-w-full h-auto" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">We’d love to hear from you. Reach out for inquiries, consultations, or collaborations.</p>
          <div className="text-md text-gray-800">
            <p>Email: <a href="mailto:soumitra.shende@gmail.com" className="text-red-600 underline">soumitra.shende@gmail.com</a></p>
            <p>Email: <a href="mailto:uma.covearch@gmail.com" className="text-red-600 underline">uma.covearch@gmail.com</a></p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <p>COVE Architects © {new Date().getFullYear()} | All rights reserved</p>
      </footer>
    </>
  );
}
