import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Footer from "../Components/Footer";
import slider5 from '../assets/slider5.jpg';


export default function Home() {
  //cards for info

  const Card = ({ image, title, description }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 justify-center transition-transform transform-gpu hover:scale-110 ">
        <div
          className="bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-yellow-600">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };


  
    const cardsData = [
      {
        image: "https://thumbs.dreamstime.com/b/scholarship-concept-chart-keywords-icons-meeting-white-office-table-102962725.jpg",
        title: "Scholarship Listing",
        description: "Access to listed and recommended scholarships",
      },
      {
        image: "https://thumbs.dreamstime.com/b/folders-labels-applications-grants-38372269.jpg",
        title: "Application & Apply Scholarship ",
        description: "Form filling ,Fast Verification and application support.",
      },
      {
        image: "https://thumbs.dreamstime.com/b/email-hand-give-out-screen-37083838.jpg",
        title: "Email & SMS Alerts",
        description: "Email and SMS alerts of matching scholarships",
      },
      {
        image: "https://c0.wallpaperflare.com/preview/867/486/521/illustration-audit-report-verification.jpg",
        title: "Verification Support",
        description: "Making Verification Faster",
      },
      {
        image: "https://entrackr.com/storage/2018/10/digilockr.jpg",
        title: "Login With DigiLocker",
        description: "Making Documentation faster",
      },
      {
        image: "https://c0.wallpaperflare.com/preview/867/486/521/illustration-audit-report-verification.jpg",
        title: "Verification Support",
        description: "Making Verification Faster",
      },
      
     
    ];
    //facts
    const scholarshipFacts = [
      'Full tuition coverage',
      'Open to all majors',
      'Merit-based selection',
      'Application deadline: March 31, 2023',
      'Renewable for up to four years',
      'Available for undergraduate and graduate students',
      'Partnered with leading companies for internships',
      'Diverse and inclusive community',
    ];

    // Set up Swiper configuration
    const params = {
      slidesPerView: 1,
      spaceBetween: 7,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
    SwiperCore.use([Navigation]);
    return (
      <>
      
      <div className=" relative  mt-5">
          <Swiper {...params} className="w-full">
            <SwiperSlide>
              <img
                src="https://scholarships.gov.in/public/Content/img/slider3.jpg"
                alt="Alternate Text 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://scholarships.gov.in/public/Content/img/slider14.jpg"
                alt="Alternate Text 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://scholarships.gov.in/public/Content/img/slider4.jpg"
                alt="Alternate Text 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src= {slider5}
                alt="Alternate Text 3"
              />
            </SwiperSlide>
           
          </Swiper>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 mt-10 mb-5 font-sans">
            {/* Card 1 */}

            <div
              className="max-w-sm w-full lg:max-w-xs 
               hover:border-transparent 
      shadow-md rounded-md overflow-hidden mt-4  hover:translate-y-2.5 bg-cover bg-center hover:scale-110 "
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/graduation-cap-sits-top-stack-books_188544-38727.jpg')" } }  >
              <Link to={"/Scholarship"}>
              <div className="px-10 py-8">
                  <div className="font-bold text-2xl mb-2 text-center backdrop-blur-sm">
                  
                    <p className=" text-white mt-10  ">SCHOLARSHIPS</p>
                  </div>
                </div>
              </Link>
                
              
            </div>

            {/* Card 2 */}
            <div
              className="max-w-sm w-full lg:max-w-xs 
              hover:border-transparent 
     shadow-md rounded-md overflow-hidden mt-4  hover:translate-y-2.5 bg-cover bg-center hover:scale-105"
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20230628/pngtree-globe-trotting-in-3d-exploring-the-world-by-airplane-image_3687653.jpg')" } }  > 
              <div className="px-10 py-8">
                <div className="font-bold text-2xl mb-2 text-center backdrop-blur-sm">
              
                  <p className="mt-10 text-white">National Scholarships</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="max-w-sm w-full lg:max-w-xs 
              hover:border-transparent 
     shadow-md rounded-md overflow-hidden mt-4  hover:translate-y-2.5 bg-cover bg-center hover:scale-105"
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683749808421-bf411cb88f20?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" } }  > 
              <div className="px-10 py-8">
                <div className="font-bold text-2xl mb-2 text-center backdrop-blur-sm " >
                
                 <p className="mt-10 text-white">Competitions And Awards</p> 
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>


        <div className="flex flex-col items-center justify-center  w-full max-lg:xs  mt-3 text-center">
          <h3 className="text-3xl text-purple-800 font-bold mt-5">
            This Is What We Offer You
          </h3>
          <p className="text-1.6xl mb-5 mt-3">
            Connecting scholarship seekers with scholarship providers using a
            robust scholarship search engine.
          </p>
        </div>

        <div className="flex flex-wrap justify-items-start">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="max-w-md mx-auto hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black-200 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent 
      shadow-md rounded-md overflow-hidden  hover:translate-y-2.5 p-6 mb-4 mt-5">
      <h2 className="text-xl font-semibold mb-4">Facts About Scholarship</h2>
      <ul className="list-disc ml-6 font-sans">
        {scholarshipFacts.map((fact, index) => (
          <li key={index} className="mb-5">
            {fact}
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
      </>
    );
  };

