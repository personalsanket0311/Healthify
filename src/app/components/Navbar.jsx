"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Navbar = () => {
  const startContent = (
    <React.Fragment>
      <Image
        src="/Images/My Hospi.jpg"
        alt="Logo"
        width={60}
        height={60}
        style={{ borderRadius: "20px" }}
      />
    </React.Fragment>
  );

  const centerContent = (
    <div className="flex flex-wrap align-items-center gap-4">
      <Link href="/" className="text-white cursor-pointer">Home</Link>
      <Link href="/Services" className="text-white cursor-pointer">Services</Link>
      <Link href="/About" className="text-white cursor-pointer">About</Link>
      <Link href="/Doctors" className="text-white cursor-pointer">Doctors</Link>
      <Link href="/faq" className="text-white cursor-pointer">Faq</Link>
      <Link href="/Testimonials" className="text-white cursor-pointer">Testimonials</Link>
      <Link href="/Contact" className="text-white cursor-pointer">Contact</Link>
      <Link href="/Admin" className="text-white cursor-pointer">Admin</Link>
    </div>
  );

  const endContent = (
    <span className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText placeholder="Search" className="w-12rem sm:w-20rem" />
    </span>
  );

  return (
    <div className="card">
      <Toolbar
        start={startContent}
        center={centerContent}
        end={endContent}
        className="bg-gray-900 shadow-2 px-4"
        style={{
          backgroundImage: "linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))",
          color: "white",
          height: "65px",
          padding: "0 1rem",
          alignItems: "center",
        }}
      />
    </div>
  );
};

export default Navbar;
