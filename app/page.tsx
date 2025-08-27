import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="font-sans flex flex-col min-h-screen p-8 gap-3 sm:p-20">
      <p className="text-lg"> Hello, my name is</p>
      <h1 className="text-4xl sm:text-4xl font-bold text-center">Alekissandro Rossi Viana de Oliveira</h1>
      <h1 className="text-xl sm:text-xl font-bold text-center">Software DEV, Eletronic Engineer and Eletronic Technician</h1>
      <p className="text-lg">
        I am self-taught Frontend developer, that started to develop by curiosity and has been hooked by this profession for more than 10 years. I have been studying Javascript, Python and Dart. 
        Lately I have been working developing apps and websites for small business.
        </p>
        <p className="text-lg">
        I have been working for The Brazilian Air Force for 22 years as a eletronic technician, which is one of the most important military institutions in Brazil. I have dealt with people from different backgrounds people from Italy, Canada, United States, France and so on... I also have developed as a professional because for many times I had to find out the crash in the system in order to solve it, and come up with solutions to make our work better. I have developed small programs to facilitate our day-to-day, and seen the results helping people in my work environment. 
        I am ready for new challenges.
        </p>
        <p className="text-lg">
        I became a christian in 1999, and after sometime I became a leader, working as a mentor in their christian life, giving them advice, guidance and support. In 2014 I became a Bible sunday school teacher and have been teaching the Bible and helping people to find their purpose in life.
        </p>
        <p className="text-lg">
        I was blessed with a wonderful family, my wife, who is a dedicated mother and a fantastic partner for dreaming, living, planning and building a great home for us, and our three kids who came to show us how to really love.
        </p>
        <h1 className="text-4xl sm:text-2xl font-bold text-left">SKILLS</h1>
        <p className="text-lg">
        HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS.
        </p>
        <p className="text-lg">
        VSCS systems, VHF systems, Satellite systems.
        </p>  
         <h1 className="text-4xl sm:text-2xl font-bold text-center">CONTACT</h1>      
        <p className="text-lg text-center">
        email: alek.rossi@gmail.com
        </p>
        <p className="text-lg text-center">
        cell phone: +55 41 99703-9657
      </p>
    </div>
    </>
  );
}
