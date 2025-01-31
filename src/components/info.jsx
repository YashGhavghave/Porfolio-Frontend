import React from "react";
const Card = ({ title, text, gradient }) => {
    return (
      <div className="relative w-[42vw] h-95 flex justify-center items-center m-10 transition duration-500 group">
        <div
          className={`absolute top-0 left-[10vw] w-1/2 h-full ${gradient} rounded-lg skew-x-6 transition duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-90px)] blur-lg`}
        ></div>
        <div
          className={`absolute top-0 left-17 w-[5vw] h-full ${gradient} rounded-lg skew-x-6 transition duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-90px)] `}
        ></div>
        <div className="relative p-10 bg-white/10 backdrop-blur-md shadow-md rounded-lg z-10 text-white transform transition duration-500 group-hover:-translate-x-6 group-hover:p-16">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-lg mb-4">{text}</p>
         
        </div>
      </div>
    );
  };
  
  const info = () => {
    return (
      <div className="flex justify-center items-center min-h-screen flex-wrap p-10 relative top-[32vh] bg-black">
        <Card title="Projects" text={
          <>
          <div>- Student Nest Web Application</div>
          <div>- Medicinal Perscription Generator with Multi-Modal Model</div>
          <div>- Medicinal Plant and Herbs Classification System Using Machine Learning</div>
          </>
        } gradient="bg-gradient-to-br from to-orange-500 " />
        <Card title="Soft Skills" text={
          <>
            <div>- Polite Behaviour</div>
            <div>- Critical Thinking</div>
            <div>- Problem Solving</div>
            <div>- Adaptive Learner</div>
          </>
        } gradient="bg-gradient-to-br from-red-500  " />
        <Card title="Technical Skill" text={
          <>
            <>- Python</>
            <div>- C++</div>
            <div>- Java</div>
            <div>- HTML</div>
            <div>- CSS</div>
            <div>- JavaScript</div>
            <div>- React</div>
          </>
        } gradient="bg-gradient-to-br from-blue-400 " />
        <Card title="Certification" text={
          <>
            <div>- Programming for Everybody (Getting Started with Python) <a href="https://drive.google.com/file/d/100j_6WYt-YJ8aNw9oyq2u5RbDdPEYbEs/view?usp=sharing ">Here</a></div>
            <div>- Python Functions, Files, and Dictionaries <a href="https://drive.google.com/file/d/1sYamctflcoWZ0ayam0YemqgpGI8xWFT1/view?usp=sharing ">Here</a></div>
            <div>- Pharmaceutical and Medical Device Innovations <a href="https://drive.google.com/file/d/13oIXJpO8kGHjGiLBVQbEa28FNj0OSQMM/view?usp=sharing ">Here</a></div>
            <div>- IBM Full Stack Software Developer <a href="https://drive.google.com/file/d/1BjA4vkDA50BRz0XBMKVl-jnOxcx4VETv/view?usp=sharing ">Here</a></div>
            <div>- Red Hat Traning and Certification <a href="https://drive.google.com/file/d/1LskeCjyln49u2EiiLVgt86Bfi4JQQMSJ/view?usp=sharing">Here</a></div>
            <div>- Google Cloud Badges <a href="https://www.cloudskillsboost.google/public_profiles/7bfe86ee-b1f8-4a26-8e43-a1b9464b65b4 ">Here</a></div>
          </>
        } gradient="bg-gradient-to-br from to-green-500" />
      </div>
    );
  };
  
  export default info;