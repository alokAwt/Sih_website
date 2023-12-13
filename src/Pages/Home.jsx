//import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Footer from "../Components/Footer";
import slider5 from "../assets/slider5.jpg";

SwiperCore.use([Navigation, Autoplay]);
export default function Home() {
  //cards for info

  const Card = ({ image, title, description }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4  justify-center transition-transform transform-gpu hover:scale-110 ">
        <div
          className="bg-cover bg-center rounded-lg h-64"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-yellow-600">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  const Notice = ({ title, content }) => {
    return (
      <div className="bg-gray-200 p-1 rounded-md mb-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };

  const cardsData = [
    {
      image:
        "https://thumbs.dreamstime.com/b/scholarship-concept-chart-keywords-icons-meeting-white-office-table-102962725.jpg",
      title: "Scholarship Listing",
      description: "Access to listed and recommended scholarships",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/folders-labels-applications-grants-38372269.jpg",
      title: "Application & Apply Scholarship ",
      description: "Form filling ,Fast Verification and application support.",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/email-hand-give-out-screen-37083838.jpg",
      title: "Email & SMS Alerts",
      description: "Email and SMS alerts of matching scholarships",
    },
    {
      image:
        "https://img.freepik.com/free-vector/expert-approved-cartoon-character-holding-checkmark-symbol-hand-finished-task-done-sign-satisfactory-official-sanction-acceptance_335657-2369.jpg?w=740&t=st=1702365167~exp=1702365767~hmac=a4a0e4a72caf38fd8f591547da4c9caefb223885268e9631aecd65de4b5d9173",
      title: "Verification Support",
      description: "Making Verification Faster",
    },
    {
      image: "https://entrackr.com/storage/2018/10/digilockr.jpg",
      title: "Login With DigiLocker",
      description: "Making Documentation faster",
    },
    {
      image:
        "https://img.freepik.com/free-vector/online-certification-concept_23-2148565904.jpg?w=900&t=st=1702364997~exp=1702365597~hmac=daa83892d7288732071dfc61bd756ef659f3369b1a70d70eea1ab36a3a95f5b9",
      title: "Registeration  of colleges ",
      description: "Registring College to Every Home state",
    },
  ];
  //facts
 

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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <div className="relative mt-5 ">
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
              src="https://scholarships.gov.in/public/Content/img/slider1.jpg"
              alt="Alternate Text 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="Alternate Text 3" />
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-next scale-0"></div>
        <div className="swiper-button-prev scale-0"></div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 mt-10 mb-5 font-sans">
          {/* Card 1 */}

          <div
            className="max-w-sm w-full lg:max-w-xs 
               hover:border-transparent 
      shadow-md rounded-lg overflow-hidden mt-4  hover:translate-y-2.5 bg-cover bg-center hover:scale-110 "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/graduation-cap-sits-top-stack-books_188544-38727.jpg')",
            }}
          >
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
     shadow-md rounded-lg overflow-hidden mt-4  hover:translate-y-2.5 bg-cover bg-center hover:scale-105"
            style={{
              backgroundImage:
                "url('https://png.pngtree.com/thumb_back/fw800/background/20230628/pngtree-globe-trotting-in-3d-exploring-the-world-by-airplane-image_3687653.jpg')",
            }}
          >
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
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1683749808421-bf411cb88f20?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="px-10 py-8">
              <div className="font-bold text-2xl mb-2 text-center backdrop-blur-sm ">
                <p className="mt-10 text-white">Competitions And Awards</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

     
      <div className="grid grid-cols-2 gap-2 mt-5 mb-5" id="div1">
        <div className="container ml-5 col-md-12 col-lg-6 border-double border-2 border-sky-500 ">
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12 col-lg-6">
              <h3 className="text-center  bg-sky-500">Notification</h3>
              <div className="link-outer">
                <marquee
                  id="notification-links"
                  direction="up"
                  scrolldelay="150"
                  style={{ height: "290px" }}
                >
                  <a
                   
                    onMouseOver={() =>
                      document.getElementById("notification-links").stop()
                    }
                    onMouseOut={() =>
                      document.getElementById("notification-links").start()
                    }
                  >
                    <h4>
                      The list of institutes approved for the reimbursement of
                      patent filing fee (Rs.1600/application) and examination
                      fee (Rs.4000/application) in phase 1 of KAPILA scheme.
                    </h4>
                  </a>

                  <a
                   
                    onMouseOver={() =>
                      document.getElementById("notification-links").stop()
                    }
                    onMouseOut={() =>
                      document.getElementById("notification-links").start()
                    }
                  >
                    <h4>
                      <strong>IPR Lecture Series</strong>
                      <br />
                      IP lecture series is now available for all students and
                      faculty members from KAPILA registered Institutions.
                    </h4>
                  </a>
                </marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 border-double border-2 border-sky-500 ">
              <h3 className="text-center blueLineHeading3 bg-sky-500">
                Recommendation For Students
              </h3>
              <div className="link-outer pt-4 ml-5">
                <section id="testim" className="testim">
                  <div className="wrap">
                    <span
                      id="right-arrow"
                      className="arrow right fa fa-chevron-right"
                    ></span>
                    <span
                      id="left-arrow"
                      className="arrow left fa fa-chevron-left "
                    ></span>
                    <ul
                      id="testim-dots"
                      className="dots"
                      style={{ display: "none" }}
                    >
                      {[...Array(10)].map((_, index) => (
                        <li
                          key={index}
                          className={index === 0 ? "dot active" : "dot"}
                        ></li>
                      ))}
                    </ul>
                    <div id="testim-content" className="cont">
                     
                    <marquee
                  id="notification-links"
                  direction="up"
                  scrolldelay="150"
                  style={{ height: "290px" }}
                >
                  <a
                    
                    onMouseOver={() =>
                      document.getElementById("notification-links").stop()
                    }
                    onMouseOut={() =>
                      document.getElementById("notification-links").start()
                    }
                  >
                    <h4>
                      The list of institutes approved for the reimbursement of
                      patent filing fee (Rs.1600/application) and examination
                      fee (Rs.4000/application) in phase 1 of KAPILA scheme.
                    </h4>
                  </a>

                  <a
                    
                    
                    onMouseOver={() =>
                      document.getElementById("notification-links").stop()
                    }
                    onMouseOut={() =>
                      document.getElementById("notification-links").start()
                    }
                  >
                    <h4>
                      <strong>IPR Lecture Series</strong>
                      <br />
                      IP lecture series is now available for all students and
                      faculty members from KAPILA registered Institutions.
                    </h4>
                  </a>
                </marquee>
                     


                     
                    </div>
                  </div>
                </section>
              </div>
            </div>
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


      <Footer />
    </>
  );
}