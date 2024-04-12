"use client"
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';

export default function Home() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  

  
  const offers = [
    {
      header: "BOOTCAMPS AND TRAINING",
      description: "Equipped with state-of-the-art gaming PCs and a dedicated space for intense training sessions, we provide the perfect environment for teams to level up their skills and strategies. Whether you're preparing for a tournament or striving to enhance teamwork, our venue offers the ideal setting to ignite your competitive spirit. Book JEC for your next bootcamp today!",
      imageUrl: "https://lh6.googleusercontent.com/VTowFS3WeNNO1eGt-mNDVX3g6MyeCIfvieezKyrbQylXRRuZlXh87OR23LNNPOT7QlLCQJYopz5QeR-tA0n4xINYajQSdREh_8_DHFMjoyCFs2GMXmDDjQPfYPXtp1Sx_A=w1280"
    },
    {
      header: "VENUE BOOKINGS & SPACE HIRE",
      description: "JEC offers a dynamic space that's ready to host your next event! Whether you're organizing invite-only offline playoffs for a prestigious esports league or hosting friendly smash locals, we provide comprehensive support to make your event a resounding success. Let us elevate your events to new heights and create memories that will last a lifetime.", 
      imageUrl: "https://lh3.googleusercontent.com/_mNbKTDftJNl5dv6Z90KP4LqsFHTWHIh4paVhiCCa7FW6ulzMUHa4M4_YqRWlyAeIqDB6uUpJvlgRit8ARmBQIWan77Z1QYR43mr1rFQCvGr2eODNWu1fMaQsiD0aMP6=w1280"
    },
    {
      header: "FULL SERVICE MEDIA PRODUCTION",
      description: "Enhance your event with the help of our official production partner, PXBMEDIA. JEC is the perfect place to run a remote broadcast for your online events, or even use the dedicated PXBMEDIA studio next door to broadcast directly from your offline event!",
      imageUrl: "https://lh5.googleusercontent.com/8KY1M66GkaBTwXMYSUEESSurVHhypMg874FclTmEGTS1apkEmZcstk6dYIviFz8qyezagD42to3OxbzCaCowozfBOcOC44vaUQk2KqNBqSFiDj_iPD0VOTuxcnBcRIm6lQ=w1280"
    }
  ]

  const sponsorLogos = ["https://lh3.googleusercontent.com/OJg1oIzUjK6GychfK4I78NAfwevMWnhm7ZE7BiNdyNdF5g0JaDPGkF2husdQPVdpBEFDf7tR3lmIGowHhzILR2sb0YPadCnANSpr-OlTDJ1MfaTjnAWbBdtldLoleRQ2ng=w1280", "https://lh3.googleusercontent.com/YYaoU1AZVhCo3jAT2UCTHLiziCtyjX2nF9bljfozCKD0Jfm7EijgIN5UBBavgFwmXBrUJKaMN8mZL1hlo7RrMNfFvpNVEVLkfkCKK3uvobW_VTpnu9WYdUY6v27q8IpM=w1280", "https://lh6.googleusercontent.com/VjcRHr9kS3GRaxGxLkVivGCn5NRLgZ1450RmM4RBgcjv7gvBDyiyZb_eTA3UjQud6IP5NqN_MREOqar1n6VsrvNVS3Scx-JgK_ujcWPBCJ4zKnMJ9OlKpfeKiURrjUGYWg=w1280", "https://lh5.googleusercontent.com/77hln2EYgEL-ChcTex_-yJRUIXqYEllHVxPz8jB6l0BiHHbzBsAUlxTIQ1x8ft6M3-2lqKyAhNYAV7bYTYPwOF_I3rA_1se178kZspg2BRg_gMmwNe8tsLJuTClDtG0M7Q=w1280",  "https://lh3.googleusercontent.com/rs5z-_xJnIuXzTDY0VaWGO-SIdxeFAiuct7XfVzbtntaMZxZ06zwBOtqtXw5cRYP3xVGWLkvFKe4r0GjpeaUqTe4KvKhTbm7PGs6Gi9S811dWJD4d5iu_a2ndBT9GSva6g=w1280", "https://lh6.googleusercontent.com/GTM7GmIYDOobmB1hIsEO206cKTRAQpb9IMN5Se5NduQcSTWK1OJHzJ1T0hVPU_6XqniWyVJkM87M-BW7WDiPvFBUDHdR4bJDfiEtUKXGLS_S4W9UboFazf2fDPawZ1foXQ=w1280","https://lh5.googleusercontent.com/f7oXAgr028UMcFgMLrtPTtlxbbpZJ7SBTib6SGaZKC4l_4-O45QNi3jk8TkCqkSG3liNnWwntUkcG52nctImmzNSD5Klr27Fiqf62z7NMPaWgBB77dK0LNM7WcehxqMudQ=w1280", "https://lh4.googleusercontent.com/P4Jh_HstaYRmdqljUOByPI1jtZmaJ1pvmVYvg7HnrAvusmTD8Tr9NGBrtl7XxFiMJlsfNIiCAuOnRr-Ob_4RfxHlm5FV3PEaMVpqPazIm3PRNjpcPFypCBHssFFplycpjA=w1280", "https://lh3.googleusercontent.com/fRZUKKjFFHkGs02YndsAxdmpB1YPBlrR3WowI7QS1PO3h6Q_CBN-dcEoVKPcLa60R9SMhLdQqvLqDLlp6XbkA4WKrDlRgGrIZ8mqs8Rg274CJ6g3UvuV9vewHzkNOWSa4w=w1280" ]
  return (
    <div className="App scrollbar-hide">
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Contact Form</h2>
        {/* Placeholder content for modal */}
        <p>Your contact form will go here.</p>
      </Modal>

     <div className="relative h-screen bg-cover bg-hero-pattern">
 
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  
  <div className="absolute top-0 left-0 p-5 z-20">
    <img src="https://lh4.googleusercontent.com/Dr4rtgJMTMYo33nslRgciaeRhr-E9cgbRxf2sQZRgN6ApIRlEHrnea2M0SfN0SdWS3IQnhF-JsY5l_2GQyVtyXA=w16383" alt="Logo" className="h-10" />
  </div>
  
  
  <div className="flex items-center justify-center h-full absolute inset-0 z-20">
    <img src="https://lh4.googleusercontent.com/L-_NsrL1LMJjDO6mNFazyZoAK6Uui2Nc2MNt1qlTnJFhneZJVw61k3-MyW_sTIk9rd-Ip9QQ1mioZgzcVqJ8Uewgn-7NS5SB0wM71RZUMU4NSpMm9gWliI_nJeO8X0SUWA=w1280" className="text-white text-4xl font-bold"/>
  </div>
</div>
   
      

      {/* Sections */}
      <div id="sponsors" className="bg-black py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-center gap-4">
      
    {sponsorLogos.map((logoSrc, index) => (
        <div key={index} className="flex items-center justify-center h-32 w-64 rounded overflow-hidden">
          <img src={logoSrc} alt={`Sponsor ${index + 1}`} className="h-full w-auto object-contain"/>
        </div>
      ))}

    </div>
  </div>
</div>

<div id="offers" className="py-10 bg-blue-600">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-white mb-10 text-center">What&apos;s On Offer?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {offers.map((offer, index) => (
        <div key={index} className="relative group">
          {/* Replace with the actual image paths if available */}
          <img src={offer.imageUrl} alt={offer.header} className="w-full h-auto rounded-lg"/>
          <div className="absolute inset-0 bg-blue-800 bg-opacity-70 flex flex-col justify-end p-4 rounded-lg group-hover:bg-opacity-60 transition duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-white mb-2">{offer.header}</h3>
            <p className="text-white">{offer.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div id="about" className="py-10 bg-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2">
      <img src="https://lh6.googleusercontent.com/2P4CMK-G3_cKVVrFwms063eUnvd2vRMEtVYNh0KRTUzMPx26TVb21PeooxO20-pgRciBCsO6XIlxqMRQrZnYDufqSrhXX51cNnZGG10Gt4zN7MbRTLzPWtKNU-vZFIk6sQ=w1280" alt="JEC Experience" className="w-full rounded-lg shadow-md mb-4 md:mb-0"/>
    </div>
    <div className="md:w-1/2 md:pl-10">
      <h2 className="text-4xl font-bold mb-3">What is JEC?</h2>
      <h3 className="text-2xl text-gray-800 font-semibold mb-3">Jönköping Esports Center is more than just a venue...</h3>
      <p className="text-gray-600 text-lg">
        Nestled in the heart of Jonkoping, our venue was created with a singular purpose: to provide a home for gamers, where dreams are realized, rivalries ignite, and friendships are forged. 
        <br/><br/>
        JEC exists to empower organizations with the ability to host exceptional gaming events, fostering connections and driving growth. With a deep understanding of the industrys pulse, we infuse every event with a palpable sense of excitement and passion.
      </p>
    </div>
  </div>
</div>

<div className="bg-black text-white">
  {/* Venue Map Section */}
  <div className="container mx-auto flex flex-col lg:flex-row items-start py-10">
    <div className="w-full lg:w-2/5">
      {/* Replace 'path-to-venue-map-image.jpg' with the actual image path */}
      <img src="https://lh5.googleusercontent.com/IvIWhKqqcM6Xn8gLpM6BEswZUR3GSG858FqmopPMsBMmFHVFHlXAsHWVq2Mnln9JeG0NkueoHzRnQN3ElEjP360ERjVoy8Vxqz1fZGe0RceproFaXG_0MByOCvlshPBKmg=w1280" alt="Venue Map" className="w-full h-auto mb-8 lg:mb-0 rounded-lg"/>
    </div>
    <div className="w-full lg:w-3/5 lg:pl-10">
      <h2 className="text-3xl font-bold mb-3">Meet The Venue</h2>
      {/* Legend List */}
      <div className="text-lg space-y-2">
        <p><span className="font-bold">A</span> - Venue Entrance</p>
        <p><span className="font-bold">B</span> - Lobby</p>
        <p><span className="font-bold">C</span> - Room C</p>
        <p><span className="font-bold">D</span> - Room D</p>
        <p><span className="font-bold">E</span> - Game Room 2</p>
        <p><span className="font-bold">F</span> - Game Room 1</p>
        <p><span className="font-bold">G</span> - Green Screen</p>
        <p><span className="font-bold">H</span> - Room H</p>
        <p><span className="font-bold">I / J</span> - Venue Storage</p>
        <p><span className="font-bold">K</span> - Kitchen (fridge, sink, microwave)</p>
      </div>
    </div>
  </div>

  {/* Tech Specs Section */}
  <div className="bg-black text-white justify-center align-center">
  <div className="container mx-auto flex flex-wrap items-center py-10">
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-bold mb-3">Tech Specs</h2>
      <p className="mb-4">
        Want to make sure our venue and setups meet your exact requirements?
      </p>
      <button onClick={onOpenModal} className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 transition duration-300">
        Contact Us
      </button>
    </div>
    <div className="w-full lg:w-1/2">
      {/* Replace 'path-to-tech-specs-image.jpg' with the actual image path */}
      <img src="https://lh6.googleusercontent.com/nx3tTEhNbHI8evyh1rGwudvRsFr7JfEvfgSJTsoX0FlTJVzbecLmuOoy45PRltuogbQrHDSm02JLNSJkvbFu9zc=w16383" alt="Tech Specs" className="w-full h-auto rounded-lg"/>
    </div>
  </div>
</div>

</div>




<div id="image-gallery" className="py-10">
<div className="container mx-auto">
    <h2 className="text-2xl font-bold text-white mb-5">Image Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {/* Replace these paths with the actual image paths */}
      <img src="https://lh6.googleusercontent.com/LrLRnl1yPzlXi7eLzlNc6DMQbAwvwSQHVM4E1fzLVMS9CHkvBw7zrGmeOehsfPs2LsMZJTvulH28vZdT_0zVjlVkTxEVqoClg2wfwjv3JrFUn5dVoF7GI6B8qCP3derccg=w1280" alt="Gallery Image 1" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh4.googleusercontent.com/Cg7tLWGLW049LXDILkkhMnca1eikInG0cvH1fWk0GGSredNcDa3woV-qzQnM-RN4dob1wNC0w2Wpqe2BZlJjRVKXC4vNxV198v9-k8ONaLVCmpB3mDZgTIkJQBbNUt2VVQ=w1280" alt="Gallery Image 2" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh5.googleusercontent.com/zf_xQSwjs2X9ctJMOzUoi4JWJ7HUcIpBfVQrB5E-W99bbeV96gEMKBbWumYtmMj2yCadA-RlocA30kY_UXR52t1RaxKXZ4t0iNl5o_Jgz2UOSU_SPgJGmgfMZWK588AEbA=w1280" alt="Gallery Image 3" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh4.googleusercontent.com/NPMGgtl_epHmMbOzlYWL-z75Mu5QWZ7ENWhoewxwthKKK2tmG9nuXub5PaG_DbNrX5pewCAVhOwFfhezO6VuXaqBrSNRRvJfliRwiiWmkidSSQpBlLs4Cu7IDBi5yVCwNQ=w1280" alt="Gallery Image 1" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh3.googleusercontent.com/mYal2aTniaoxmyMmTghp2NO-O6DEE965wlEDC1AenYwyd912xNmzMAQcNFjzqalZXnbPEEkn5l8Y8_MDyxv9sPACiisjmwXYCkqClHu5eo6LFYAXGWUetqRrDxGyBawOoQ=w1280" alt="Gallery Image 2" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh6.googleusercontent.com/VRJ0ZxJpaPR_24VqlkOPTlFNLBKOt0mz9c2YMHPZglxVMiBGX4nRPp6MRZQ-1NcTBJvTjzzEjq05JUvDvOzbfQXvjIrnaTmcXFnPeAWTikIR99h7aPhdPyYzAs1NhOb93w=w1280" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh4.googleusercontent.com/RPmXND-NXiuDnInLsXaO3EGCBWpTrDentafivDX9zaTAVT4b-6fGAV7H_ZwzsNX890syZEnYXsKyg8MdyvlANL3VNOIcsmIxNIQDwulPJ4Gdglv4ehf9vKfx1Qv79hQI2Q=w1280" alt="Gallery Image 1" className="inline-block h-40 w-auto rounded-lg"/>
      <img src="https://lh6.googleusercontent.com/0SyVjZgg_XXCrIY_2x_pg_7WONPDEgXadBAI17WiTRnXEZ7sAW-HhLJDix7caYm7tU58uwBud-YD31uhhOtuybNM3MgMfGjkv18HgkBwQwQSQOeBMMyto24ZtCQITKHaDQ=w1280" alt="Gallery Image 2" className="inline-block h-40 w-auto rounded-lg"/>
      {/* Add more images as needed */}
    </div>
  </div>
</div>

<div className="flex items-center bg-blue-500 text-white">
  <div className="container mx-auto flex items-center py-6">
    <div className="w-1/2">
      {/* Replace 'path-to-network-image.jpg' with the actual image path */}
      <img src="https://lh4.googleusercontent.com/Br_avUQn6YHo8P2Lpi-uvhFHtMV_XCo4fK1uBTxYyGqNVbyhwizu59Os8Uy4fSHvGXqwsEW0Bkq_NwRRai0sFvX7FPiEeuBra7QwMwrfdqJaGMzeXMfQ2NIHdSh-EhU=w1280" alt="Network Connections" className="w-full h-auto"/>
    </div>
    <div className="w-1/2 pl-10">
      <h2 className="text-3xl font-bold mb-2">Let&apos;s get connected!</h2>
      <button onClick={onOpenModal} className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-black text-white p-5">
        <div className="container mx-auto text-center">
          © 2024 Jönköping Esport Center
        </div>
      </footer>
    </div>
  );
  
}
