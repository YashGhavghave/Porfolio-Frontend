import React from 'react';
import GoogleLogo from './images/781076272185a13bc8555bae440557aa.jpg';

function Profile() {
  return (
    <div className="flex justify-center relative top-[13vh] bg-black max-xl:top-[18vh] max-lg:top-[10vh]">
      <div className="relative w-[15vw] h-[30vh] group max-xl:w-[70vw] max-xl:h-[35vh] max-lg:h-[70vw] ">
        <div
          className="absolute transition-all duration-1000 opacity-10 -inset-2 bg-gradient-to-r 
          from-[#32ca13] via-[#2e2bc7] to-[#d6150b] rounded-full blur-2xl 
          group-hover:opacity-100 group-hover:-inset-3 group-hover:duration-200 animate-tilt "
        ></div>

        <div className="relative w-full h-full rounded-full overflow-hidden ">
          <img src={GoogleLogo} alt="Google Logo" className="h-full w-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
