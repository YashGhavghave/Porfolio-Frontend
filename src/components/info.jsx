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
    <>
      <div className="flex justify-center items-center min-h-screen flex-wrap p-10 relative top-[32vh] bg-black max-xl:hidden">
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
            <div>- Programming for Everybody (Getting Started with Python) <a href="Your Certificate Link">Here</a></div>
            <div>- Python Functions, Files, and Dictionaries <a href="Your Certificate Link">Here</a></div>
            <div>- Pharmaceutical and Medical Device Innovations <a href="Your Certificate Link">Here</a></div>
            <div>- IBM Full Stack Software Developer <a href="Your Certificate Link">Here</a></div>
            <div>- Red Hat Traning and Certification <a href="Your Certificate Link">Here</a></div>
            <div>- Google Cloud Badges <a href="Your Certificate Link ">Here</a></div>
          </>
        } gradient="bg-gradient-to-br from to-green-500" />
      </div>

      {/* for mobile and other devices */}

      <div className="flex flex-col justify-center items-center p-6 bg-black gap-6 relative top-[20vh] min-xl:hidden">
        <div className="w-full  p-8 bg-black shadow-md rounded-lg">
          <h2 className="text-8xl tangerine-bold mb-6 text-white flex justify-center">Projects</h2>
          <ul className="list-disc list-inside text-white text-3xl p-10 tracking-widest">
            <li>Student Nest Web Application</li>
            <li>Medicinal Prescription Generator with Multi-Modal Model</li>
            <li>Medicinal Plant and Herbs Classification System Using Machine Learning</li>
          </ul>
        </div>

        <div className="w-full p-8 bg-black shadow-md rounded-lg">
          <h2 className="text-8xl tangerine-bold mb-6 text-white flex justify-center">Soft Skills</h2>
          <ul className="list-disc list-inside text-white text-3xl p-10 tracking-widest">
            <li>Polite Behaviour</li>
            <li>Critical Thinking</li>
            <li>Problem Solving</li>
            <li>Adaptive Learner</li>
          </ul>
        </div>

        <div className="w-full p-8 bg-black shadow-md rounded-lg">
          <h2 className="text-8xl tangerine-bold mb-6 text-white flex justify-center">Technical Skills</h2>
          <ul className="list-disc list-inside text-white text-3xl p-10 tracking-widest">
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="w-full p-8 bg-black shadow-md rounded-lg">
          <h2 className="text-8xl tangerine-bold mb-6 text-white flex justify-center">Certifications</h2>
          <ul className="list-disc list-inside text-white text-3xl p-10 tracking-widest max pr">
            <li>
              Programming for Everybody (Python){" "}
              <a className="text-blue-500 underline" href="Your Certificate Link">
                Here
              </a>
            </li>
            <li>
              Python Functions, Files, and Dictionaries{" "}
              <a className="text-blue-500 underline" href="Your Certificate Link">
                Here
              </a>
            </li>
            <li>
              Pharmaceutical and Medical Device Innovations{" "}
              <a className="text-blue-500 underline" href="Your Certificate Link">
                Here
              </a>
            </li>
            <li>
              IBM Full Stack Software Developer{" "}
              <a className="text-blue-500 underline" href="Your Certificate Link">
                Here
              </a>
            </li>
            <li>
              Red Hat Training and Certification{" "}
              <a className="text-blue-500 underline" href="Your Certificate Link">
                Here
              </a>
            </li>
            <li>
              Google Cloud Badges{" "}
              <a className="text-blue-500 underline" href="Your Certificate Link">
                Here
              </a>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default info;