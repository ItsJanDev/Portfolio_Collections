import React from 'react';
import blazor from '../data/blazor.png';

const Timeline = () => {
  return (
    <div className="timeline relative">
      
      <div className="container relative w-2/4 w-2/4 left-container">      
          <img src={blazor} alt="" className="absolute w-10 rounded-full"/>
        <div className="text-box bg-white relative rounded-md text-base">
          <h2 className="text-2xl font-semibold">IT Compliance Officer</h2>
          <small>July 2022 - Present - Fastremit Service Inc.</small>
          <p>Have practical experience in IT Compliance within the Remittance Industry. This experience has allowed me to gain a deep understanding of the compliance requirements and standards within the industry, ensuring that all technical solutions meet the necessary regulations and guidelines</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container relative w-2/4  right-container">
      <img src={blazor} alt="" className="absolute w-10 rounded-full"/>
        <div className="text-box  bg-white relative rounded-md text-base">
          <h2 className="text-2xl font-semibold">Information Technology Specialist</h2>
          <small>March 2020 - Present - Fastremit Service Inc.</small>
          <p>Adapted my previous responsibilty being a Information Technology Supervisor</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="container relative w-2/4  left-container">
      <img src={blazor} alt="" className="absolute w-10 rounded-full"/>
        <div className="text-box bg-white relative rounded-md text-base">
          <h2 className="text-2xl font-semibold">Information Technology Supervisor</h2>
          <small>March 2020 - July 2022 - Fastremit Service Inc.</small>
          <p>Responsible for creating, improving and developing IT project strategies. Resolved
            technical issues. Creating stored procedures in order to make the system function
            efficiently which then converting to using API effectively. I have also worked in a
            technical support role within the Remittance Industry. This experience has equipped me
            with the skills to provide effective troubleshooting and assistance to users, resolving their
            technical issues promptly and efficiently</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container relative w-2/4  right-container">
      <img src={blazor} alt="" className="absolute w-10 rounded-full"/>
        <div className="text-box  bg-white relative rounded-md text-base">
          <h2 className="text-2xl font-semibold">Operation Staff</h2>
          <small>August 2019 - March 2020 - Fastremit Service Inc.</small>
          <p>Responsible for processing day-to-day transactions and focuses on process effectiveness.
            Read and followed specific instructions, which are unique for each transaction, to
            accurately check for risk assessment. Maintained departmental standards for the
            timeliness, productivity and quality, provided high-level service, research, resolution, and
            documenting actions.
            Also served as a introduction on how the system works in order to familiarize for the
            Information Technolofy Specialist duty.
            </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

    </div>
  )
}

export default Timeline