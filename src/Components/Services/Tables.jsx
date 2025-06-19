import React from 'react';
import { FaGlobeAmericas } from "react-icons/fa"; // Import a globe icon
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import a checkmark icon

const JobTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
      <div className="flex items-center bg-[#70cd3a] text-gray-50 font-bold px-4 py-2 rounded shadow-lg">
        <FaGlobeAmericas className="text-gray-50 text-2xl mr-2" />
        <span className="flex-1 text-lg">No need to travel other countries.</span>
        <AiOutlineCheckCircle className="text-gray-50 text-2xl ml-2" />
      </div>
      </div>

      <p className="text-gray-700 mt-4">
        Securing an Asian work visa can be a challenging process due to the complex requirements and procedures set by the Asian visa and immigration authorities.
      </p>

      <h3 className="text-xl font-semibold text-[#872341] mt-6 mb-4">Countries with Open Vacancies</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Dubai (From March 2025)</li>
        <li>Singapore & Malaysia (Coming soon…)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Opportunities Available</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Bike Riders (Food delivery service)</li>
        <li>Salary range: AED 2000</li>
      </ul>

      <p className="text-gray-700 mb-6">
        The team at Naj International provides a complete solution for Bangladeshi citizens looking to obtain an Asian work visa. Our expert visa counseling services are designed to offer a smooth and efficient application process, tailored to your unique profile. We understand the importance of accurate documentation and conduct a detailed background and travel history check to offer precise, personalized guidance. For dedicated, one-on-one support, please don't hesitate to reach out to us.
      </p>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Our Counseling Support Includes</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Conducting a thorough review of the client's background and travel history</li>
        <li>Developing a personalized checklist tailored to the client's profile and qualifications</li>
        <li>Identifying areas requiring special attention within the client's profile and addressing them to ensure the most effective visa strategy for the respective embassy</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Asian Work Visa Process for Bangladeshi Applicants</h3>
      <ol className="list-decimal list-inside text-gray-700 mb-6">
        <li>Secure a job offer from an employer in Asia.</li>
        <li>The employer will apply for the necessary work permits.</li>
        <li>The employer will also provide the employee with residence, health insurance, and transportation benefits.</li>
        <li>The applicant in Bangladesh will complete the visa application form and schedule an appointment.</li>
        <li>Once all documents are prepared, the applicant will submit the visa application to the relevant visa application center or embassy, along with the required supporting documents.</li>
        <li>During submission, the applicant will be required to provide biometric data. Note that biometric requirements may vary depending on the destination country.</li>
      </ol>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Visa Categories for Asian Work Visas</h3>
      <p className="text-gray-700 mb-6">
        We only handle applications for permanent work permits or long-stay visas. Please note that we do not assist with seasonal work visas.
      </p>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Common Supporting Documents for an Asian Work Visa</h3>
      <p className="text-gray-700 mb-6">
        We provide a customized checklist for each client based on their specific case. Our comprehensive visa counseling services are available upon formal confirmation and in accordance with our terms and conditions. Once the case is accepted, we will carefully explain the specific requirements for your visa application and assist in arranging documents in a manner that enhances their acceptability.
      </p>
      <p className="text-gray-700 mb-6">
        As part of the process, we will open a case file under your name to analyze your travel, professional history, and any previous visa refusals. We will also conduct a pre-application document screening to ensure that everything is in order.
      </p>
      <p className="text-gray-700 mb-6">
        Please note: All documents must be in English. If any documents are not in English, they must be translated and notarized.
      </p>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Fees</h3>
      <p className="text-gray-700 mb-6">
        The fees vary depending on the country of your visa and the level of support required from our team. We encourage you to contact us for a detailed breakdown of the exact fees and charges applicable to your case.
      </p>

      <h3 className="text-xl font-semibold text-[#872341] mb-4">Processing Time</h3>
      <p className="text-gray-700 mb-6">
        The total processing time for the entire visa application process is typically 3-4 months.
      </p>
    </div>
  );
};

export default JobTable;
