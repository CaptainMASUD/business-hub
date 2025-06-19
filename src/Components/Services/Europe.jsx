import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import { FaArrowRight, FaPassport, FaFileContract, FaHome, FaUserGraduate } from 'react-icons/fa';
import { FaBuildingColumns } from "react-icons/fa6";
import { MdHealthAndSafety, MdWork } from 'react-icons/md';
import workPermitImage from "../../images/ServicesImg/workpermit.jpg";
import services from "../../images/ServicesImg/services.jpg";
import constraction from "../../images/ServicesImg/cons.jpeg";
import warehouse from "../../images/ServicesImg/warehouse.jpg";
import many from "../../images/ServicesImg/many.jpeg";
import { useNavigate } from 'react-router-dom';
import { FaGlobeAmericas } from "react-icons/fa"; // Import a globe icon
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import a checkmark icon


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NorwayPermitServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('process');

  const handleContactClick = () => {
    navigate("/contact");
    scroll(0, 0);
  };

  const TabContent = ({ active, children }) => (
    <motion.div
      className={`tab-content ${active ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#872341] mb-8"
          style={{ fontFamily: "Merienda" }}
        >
          Europe Work Visa
        </motion.h1>

       {/* Image Slider */}
<motion.div
  className="relative rounded-lg shadow-xl overflow-hidden mb-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <Slider {...sliderSettings}>
      {/* Slide 2 */}
      <div className="relative">
      <img
        src={warehouse}
        alt="Warehouse Work"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#233587d0] to-transparent flex items-center">
        <div className="text-white p-8">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-white bg-[#872341c0] text-center rounded-lg"
          >
            Warehouse Job Openings
          </motion.h2>
          <p className="text-xl">
            Explore logistics and inventory roles to kickstart your career.
          </p>
        </div>
      </div>
    </div>
    {/* Slide 1 */}
    <div className="relative">
      <img
        src={constraction}
        alt="Construction Work"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#233587d0] to-transparent flex items-center">
        <div className="text-white p-8">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-white bg-[#872341c0] text-center rounded-lg"
          >
            Construction Work Opportunities
          </motion.h2>
          <p className="text-xl">
            Building the future with top-notch construction jobs in European Coutnries.
          </p>
        </div>
      </div>
    </div>

      {/* Slide 3 */}
      <div className="relative">
      <img
        src="https://s.yimg.com/ny/api/res/1.2/Oay_GZ9kfU7MC2wo174iTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/fortune_175/499d2f69f13577729f325dc2444f4cbe"
        alt="Warehouse Work"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#233587d0] to-transparent flex items-center">
        <div className="text-white p-8">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-white bg-[#872341c0] text-center rounded-lg"
          >
            many more job opportunities
          </motion.h2>
          <p className="text-xl">
          a specific opening for employment that provides individuals the chance to gain work experience, develop skills, and earn income.
          </p>
        </div>
      </div>
    </div>

  
  </Slider>
</motion.div>


<motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-[#872341] mb-4">Expert Consultancy Services</h2>
          <p className="text-lg text-gray-700">
            We specialize in assisting individuals and businesses in obtaining work permits for European Countries.
            Let us guide you through the process with our expertise and personalized support.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#872341] mb-4">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <MdWork className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Work Permit Advisory</h4>
                <p className="text-gray-700">Guidance on eligibility, documentation, and procedures for Norwegian work permits.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileContract className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Application Assistance</h4>
                <p className="text-gray-700">Meticulous preparation and submission to meet all regulatory standards.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaBuildingColumns className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Support for Employers</h4>
                <p className="text-gray-700">Solutions for businesses recruiting international talent, including compliance with Norwegian labor laws.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaHome className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Relocation Guidance</h4>
                <p className="text-gray-700">Assistance with housing, navigating local services, and cultural integration.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#872341] mb-4">Types of Work Permits</h3>
          <p className="text-gray-700">
          We offer European work visa counseling services from Bangladesh.<br />
          <div className="flex items-center bg-[#70cd3a] text-gray-50 font-bold px-4 py-2 rounded shadow-lg">
        <FaGlobeAmericas className="text-gray-50 text-2xl mr-2" />
        <span className="flex-1 text-lg">No need to travel other countries.</span>
        <AiOutlineCheckCircle className="text-gray-50 text-2xl ml-2" />
      </div>
          </p>
          <p className="text-gray-700 mt-4">
          Securing a European work visa can be a challenging process due to the complex requirements and procedures set by the European visa and immigration authorities.
          </p>
          <p className="text-gray-700 mt-4">
          <div>
  <strong className="text-xl text-[#872341]">
    Countries with Open Vacancies:
  </strong>
  <br />
  <strong className="text-lg">
    <span className="italic text-xl">
      Croatia, Denmark, Hungary, Luxembourg, Malta, Norway, Netherlands & Serbia
    </span>
  </strong>
</div>


          </p>
          <p className="text-gray-700 mt-4">
          <strong>Opportunities available:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Warehouse workers, helpers, and supervisors</li>
            <li>Factory workers</li>
            <li>Construction workers</li>
            <li>Hospitality industry roles, and more</li>
          </ul>
          <p className="text-gray-700 mt-4">
          <strong>Salary range:</strong> €600 to €2000, depending on qualifications, skills, industry, and job responsibilities.
          </p>
          <p className="text-gray-700 mt-4">
          The team at Naj International provides a complete solution for Bangladeshi citizens looking to obtain a European work visa. Our expert visa counseling services are designed to offer a smooth and efficient application process, tailored to your unique profile. We understand the importance of accurate documentation and conduct a detailed background and travel history check to offer precise, personalized guidance. For dedicated, one-on-one support, please don't hesitate to reach out to us.
          </p>
          <p className="text-gray-700 mt-4">
          <strong>Our counseling support includes, but is not limited to:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Conducting a thorough review of the client's background and travel history</li>
            <li>Developing a personalized checklist tailored to the client's profile and qualifications</li>
            <li>Identifying areas requiring special attention within the client's profile and addressing them to ensure the most effective visa strategy for the respective embassy.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#872341] mb-4">Europe Work Visa Process for Bangladeshi Applicants</h3>
          <ol className="list-decimal ml-8 text-gray-700 mt-6">
            <li>Secure a job offer from an employer in Europe.</li>
            <li>The employer will apply for the necessary work permits.</li>
            <li>The employer will also provide the employee with residence, health insurance, and transportation benefits.</li>
            <li>The applicant in Bangladesh will complete the visa application form and schedule an appointment.</li>
            <li>Once all documents are prepared, the applicant will submit the visa application to the relevant visa application center or embassy, along with the required supporting documents.</li>
            <li>During submission, the applicant will be required to provide biometric data. Note that biometric requirements may vary depending on the destination country.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#872341] mt-6">Visa Categories for Europe Work Visas</h3>
          <p className="text-gray-700 mt-4">
          We only handle applications for permanent work permits or long-stay visas. Please note that we do not assist with seasonal work visas.
          </p>

          <h3 className="text-2xl font-semibold text-[#872341] mt-6">Common Supporting Documents for a European Work Visa</h3>
          <p className="text-gray-700 mt-4">
          We provide a customized checklist for each client based on their specific case. Our comprehensive visa counseling services are available upon formal confirmation and in accordance with our terms and conditions. Once the case is accepted, we will carefully explain the specific requirements for your visa application and assist in arranging documents in a manner that enhances their acceptability.
          </p>
          <p className="text-gray-700 mt-4">
          As part of the process, we will open a case file under your name to analyze your travel, professional history, and any previous visa refusals. We will also conduct a pre-application document screening to ensure that everything is in order.
          </p>
          <p className="text-gray-700 mt-4">
          <strong>Please note:</strong> All documents must be in English. If any documents are not in English, they must be translated and notarized.
          </p>

          <h3 className="text-2xl font-semibold text-[#872341] mt-6">Fees</h3>
          <p className="text-gray-700 mt-4">
          The fees vary depending on the country of your visa and the level of support required from our team. We encourage you to contact us for a detailed breakdown of the exact fees and charges applicable to your case.
          </p>

          <h3 className="text-2xl font-semibold text-[#872341] mt-6">Processing Time</h3>
          <p className="text-gray-700 mt-4">
          The total processing time for the entire visa application process is typically 6 to 8 months.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-12"
          >
            <h3 className="text-2xl font-semibold text-[#872341] mb-4">Required Documents</h3>
            <ul className="grid md:grid-cols-2 gap-4 mt-6">
              <li className="flex items-center">
                <FaPassport className="text-[#872341] mr-2" /> A valid passport
              </li>
              <li className="flex items-center">
                <FaPassport className="text-[#872341] mr-2" /> Recent passport-sized photographs
              </li>
              <li className="flex items-center">
                <FaPassport className="text-[#872341] mr-2" /> National ID
              </li>
              <li className="flex items-center">
                <FaUserGraduate className="text-[#872341] mr-2" /> Proof of qualifications (diplomas, certificates, etc.)
              </li>
              <li className="flex items-center">
                <FaFileContract className="text-[#872341] mr-2" /> Police clearance certificate
              </li>
              <li className="flex items-center">
                <MdHealthAndSafety className="text-[#872341] mr-2" /> Health insurance documentation
              </li>
              <li className="flex items-center">
                <FaFileContract className="text-[#872341] mr-2" /> Employment contract
              </li>
              <li className="flex items-center">
                <FaHome className="text-[#872341] mr-2" /> Proof of accommodation
              </li>
            </ul>
          </motion.div>


        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#872341]">Need Professional Assistance?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us be your trusted partner on your journey to working in Abroad. Contact us today for expert guidance and support.
          </p>
          <a
            onClick={handleContactClick }
            className="bg-[#872341] cursor-pointer text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#bd325c] transition duration-300 inline-flex items-center"
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
      
    </motion.div>
  );
};

export default NorwayPermitServices;
