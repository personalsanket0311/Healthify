"use client";

import React from 'react'

import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import Image from 'next/image';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const servicesData = [
  {
    title: "Emergency Care",
    subtitle: "24/7 Services",
    description: "Immediate treatment with fully-equipped trauma units.",
    image: '/Images/emergency.jpg',
    brochure: "/brochures/emergency.pdf"
  },
  {
    title: "Surgery",
    subtitle: "Modern OT",
    description: "Advanced surgeries with minimally invasive techniques.",
    image: 'Images/surgery.jpg',
    brochure: "/brochures/surgery.pdf"
  },
  {
    title: "Diagnostics",
    subtitle: "Labs & Imaging",
    description: "Precise diagnostic reports using latest equipment.",
    image:'Images/diag.jpg' ,
    brochure: "/brochures/diagnostics.pdf"
  },
  {
    title: "Maternity",
    subtitle: "Safe Deliveries",
    description: "Compassionate maternity & child care services.",
    image: '/Images/maternity.jpg',
    brochure: "/brochures/maternity.pdf"
  },
  {
    title: "Dental",
    subtitle: "Smile Care",
    description: "Expert care in oral hygiene, implants & surgery.",
     image: '/Images/dental.jpg',
    brochure: "/brochures/dental.pdf"
  },
  {
    title: "Pediatrics",
    subtitle: "Children’s Health",
    description: "Specialized care for infants to teens.",
    image: '/Images/pedia.jpg',
    brochure: "/brochures/pediatrics.pdf"
  },
  {
    title: "Pharmacy",
    subtitle: "24hr Medicines",
    description: "Full-service in-house pharmacy for all needs.",
    image: '/Images/pharmacy.jpg',
    brochure: "/brochures/pharmacy.pdf"
  },
  {
    title: "Physiotherapy",
    subtitle: "Rehab & Recovery",
    description: "Professional rehabilitation to improve mobility.",
    image: '/Images/physi.jpg',
    brochure: "/brochures/physiotherapy.pdf"
  }
];
const page = () => {
    const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  const serviceTemplate = (service) => (
    <div className="border-1 surface-border border-round m-2 text-center py-4 px-3">
      <div className="mb-3">
        <img
          src={service.image}
          alt={service.title}
          className="shadow-2"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <h4 className="mb-1">{service.title}</h4>
      <h6 className="mt-0 mb-2">{service.subtitle}</h6>
      <p className="mb-3">{service.description}</p>
      <div className="flex gap-2 justify-content-center">
        <a href={service.brochure} download>
          <Button label="Download Brochure" icon="pi pi-download" className="p-button-sm p-button-secondary" />
        </a>
      </div>
    </div>
  );
  return (
    <div className="card">
      <h2 className="text-center mt-4 mb-4 text-2xl font-semibold text-blue-700">Our Services</h2>
      <Carousel
        value={servicesData}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={serviceTemplate}
        circular
        autoplayInterval={2500}
      />

   
      <div className="grid mt-5 p-3">
        {servicesData.map((service, index) => (
          <div className="col-12 md:col-3" key={index}>
            <Card
              title={service.title}
              subTitle={service.subtitle}
              header={
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
                />
              }
              footer={
                <a href={service.brochure} download>
                  <Button
                    label="Download Brochure"
                    icon="pi pi-download"
                    className="p-button-sm p-button-secondary"
                  />
                </a>
              }
              className="mb-4"
            >
              <p className="m-0">{service.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page