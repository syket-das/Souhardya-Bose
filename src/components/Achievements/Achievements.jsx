import React from 'react';
import pic1 from '../../img/NEP/IMG_20231102_222246.jpg';
import pic3 from '../../img/NEP/With Chairpeson of UGC.png';

export default function () {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-4 text-[#242D49]">
        Achievements
      </h2>
      <div className="flex justify-center">
        <ul className="  mx-auto">
          <li className="bg-[#F0F0F0] p-2 my-2 rounded-md">
            Appointed as{' '}
            <span className="font-bold">
              NEP SAARTHI govt of India , UGC , Ministry of Education
            </span>{' '}
            Got selected among 40k students and represented the India's biggest
            University to chairman of UGC
          </li>
          <li className="bg-[#F0F0F0] p-2 my-2 rounded-md">
            Elected as <span className="font-bold">Chair person of IEEE</span>{' '}
            LPU
          </li>

          <li className="bg-[#F0F0F0] p-2 my-2 rounded-md">
            Invited by <span className="font-bold">VIT Vellore</span> as a guest
            speaker in a podcast 2020 oct
          </li>
          <li className="bg-[#F0F0F0] p-2 my-2 rounded-md">
            Mentored and guided Google solutions challenge 2020, 2021
          </li>
          <li className="bg-[#F0F0F0] p-2 my-2 rounded-md">
            Completed Industrial research training at IIT Kanpur under Dr. Aman
            HOD CSE
          </li>
          <li className="bg-[#F0F0F0] p-2 my-2 rounded-md">
            Hosted and organised several workshop, seminar, podcast for Google
            developer students club community
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <img className="w-[500px]" src={pic1} alt="" />
        <img className="w-[500px]" src={pic3} alt="" />
      </div>
    </div>
  );
}
