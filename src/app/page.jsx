'use client';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Slider {...settings}>
        <div>
          <Image
            src="/Images/9e31b5a93148682a5b6efb8d48ffd63d.jpg"
            alt="Slide 1"
            width={1200}
            height={400}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div>
          <Image
            src="/Images/hospital-building-with-ambulance-emergency-car-on-cityscape-background-cartoon-illustration-vector.jpg"
            alt="Slide 2"
            width={1200}
            height={400}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div>
          <Image
            src="/Images/images (1).jpg"
            alt="Slide 3"
            width={1200}
            height={300}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </Slider>

      <h2 className="text-center py-4 text-2xl font-bold">About us</h2>
      <p className="text-justify leading-7">
        At My HospiCare, we are dedicated to delivering compassionate,
        high-quality healthcare in a safe and patient-centered environment. With
        a team of experienced doctors, nurses, and medical staff, our hospital
        combines cutting-edge technology with a commitment to personalized care.
        Founded with the vision of making healthcare accessible and affordable
        for all, our hospital offers a wide range of medical services — from
        general medicine and emergency care to advanced surgical procedures and
        specialty treatments. We pride ourselves on our modern infrastructure,
        clean facilities, and a culture of excellence that ensures every patient
        receives the attention and care they deserve. Whether it’s a routine
        check-up or a life-saving procedure, we are here for you — 24/7.
      </p>
    </div>
  );
}
