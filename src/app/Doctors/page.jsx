'use client';
import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const page = () => {
    const router = useRouter();


  const doctorList = [
    {
      name: 'Dr. Anjali Mehta',
      specialty: 'Cardiologist',
      image:'/Images/doc2.jpg',
      experience: '12+ Years'
    },
    {
      name: 'Dr. Ravi Kumar',
      specialty: 'Neurologist',
      image:'/Images/doc3.jpg',
      experience: '10+ Years'
    },
    {
      name: 'Dr. Sneha Patil',
      specialty: 'Pediatrician',
      image: '/Images/shenal patil.jpg',
      experience: '8+ Years'
    },
    {
      name: 'Dr. Arjun Verma',
      specialty: 'Orthopedic Surgeon',
      image: '/Images/doc4',
      experience: '15+ Years'
    }
  ];

  return (
   <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold text-blue-700 mb-6">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctorList.map((doc, index) => (
          <Card
            key={index}
            title={doc.name}
            subTitle={doc.specialty}
            header={
              <img
                src={doc.image}
                alt={doc.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
              />
            }
            footer={
              <Button
                label="Book Appointment"
                icon="pi pi-calendar-plus"
                className="p-button-sm p-button-primary"
                onClick={() => router.push('/Appointment')}
              />
            }
          >
            <p className="m-0 text-gray-700">Experience: {doc.experience}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default page