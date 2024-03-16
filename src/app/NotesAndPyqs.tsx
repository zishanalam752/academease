import React from 'react'
import { LampDemo } from './LampEffect'
import Card from './Card'
import { LampContainer } from '@/components/ui/lamp'
const Dept = [
  {
    name: "Computer Science/Information Technology",
    description: "Our Computer Science program equips students with the skills to develop innovative software solutions and excel in domains like artificial intelligence and cybersecurity.",
    codeblock:"Navigate Computer Science & Information Eng: Access notes and PYQs. Enhance your understanding, excel in exams, and pave the path for a successful career with our specialized study materials tailored for CS & IT enthusiasts.",
    semester: [
      {
        id: 1, name: 'Semester I', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 2, name: 'Semester II', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 3, name: 'Semester III', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 4, name: 'Semester IV', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 5, name: 'Semester V', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 6, name: 'Semester VI', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 7, name: 'Semester VII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 8, name: 'Semester VIII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },

    ]
  },
  {
    name: "Electronics & Communication Engineering",
    description: "In Electronics and Communication Engineering, students delve into the intricacies of electronic circuits and communication systems, preparing them for careers in telecommunications, embedded systems, and IoT.",
    codeblock:"Explore Electronics & Communication Eng: Access notes and PYQs. Enhance your understanding, excel in exams, and elevate your career prospects with our specialized study materials tailored for ECE enthusiasts.",
    semester: [
      {
        id: 1, name: 'Semester I', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 2, name: 'Semester II', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 3, name: 'Semester III', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 4, name: 'Semester IV', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 5, name: 'Semester V', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 6, name: 'Semester VI', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 7, name: 'Semester VII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 8, name: 'Semester VIII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },

    ]
  },
  {
    name: "Electrical Engineering",
    description: "Our Electrical Engineering program focuses on power generation, control systems, and renewable energy, empowering students to contribute to sustainable energy solutions.",
    codeblock:"Unlock Electronics Engineering: Access notes and PYQs. Amplify your knowledge, excel in examinations, and electrify your career journey with our specialized study materials for electronics engineers.",
    semester: [
      {
        id: 1, name: 'Semester I', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 2, name: 'Semester II', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 3, name: 'Semester III', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 4, name: 'Semester IV', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 5, name: 'Semester V', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 6, name: 'Semester VI', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 7, name: 'Semester VII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 8, name: 'Semester VIII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },

    ]
  },
  {
    name: "Civil Engineering",
    description: "Our Civil Engineering curriculum equips students with the knowledge and skills to undertake challenging infrastructure projects, contributing to the development of sustainable and resilient cities.",
    codeblock:"Unlock Civil Engineering Resources: Dive into notes and PYQs. Excel in exams, gain practical insights, and pave your way to success in the field with our comprehensive study materials.",
    semester: [
      {
        id: 1, name: 'Semester I', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 2, name: 'Semester II', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 3, name: 'Semester III', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 4, name: 'Semester IV', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 5, name: 'Semester V', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 6, name: 'Semester VI', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 7, name: 'Semester VII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 8, name: 'Semester VIII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },

    ]
  }
  , {
    name: "Mechanical Engineering",
    description: "Mechanical Engineering at NIT KKR emphasizes the design and analysis of mechanical systems, nurturing students' expertise in areas such as robotics, automotive engineering, and advanced manufacturing.",
    codeblock:"Explore Mechanical Engineering: Access notes and PYQs. Elevate your understanding, excel in exams, and propel your career with our extensive study resources tailored for mechanical engineers.",
    semester: [
      {
        id: 1, name: 'Semester I', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 2, name: 'Semester II', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 3, name: 'Semester III', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 4, name: 'Semester IV', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 5, name: 'Semester V', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 6, name: 'Semester VI', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 7, name: 'Semester VII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 8, name: 'Semester VIII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },

    ]
  },
  {
    name: "Production & Industrial Engineering",
    description: "In the Production Engineering program, students acquire a blend of mechanical engineering principles and management skills, enabling them to optimize manufacturing processes, enhance productivity, and contribute to the industry's growth",
    codeblock:"Navigate Production Engineering: Access notes and PYQs. Streamline your understanding, excel in assessments, and optimize your career trajectory with our tailored study resources for production engineers.",
    semester: [
      {
        id: 1, name: 'Semester I', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 2, name: 'Semester II', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 3, name: 'Semester III', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 4, name: 'Semester IV', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 5, name: 'Semester V', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 6, name: 'Semester VI', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 7, name: 'Semester VII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },
      {
        id: 8, name: 'Semester VIII', subjects: ["PSPS", "Integral Calculus", "Physics", "Chemistry", "Engineering Practice"]
      },

    ]
  },

]
export default function NotesAndPyqs({ index }: any) {
  
  return (
    <div className='w-full flex justify-center mt-18  bg-slate-950'>
      <div className='w-[90%] mx-auto flex flex-col mb-16'>
        <div className='text-center flex flex-col justify-center items-center gap-12 '>
          {/* heading */}
          <LampDemo title={Dept[index].name} description={Dept[index].description} codeblock={Dept[index].codeblock}></LampDemo>
          {/* description */}
          
        </div>
        {/* notes and pyqs */}
        <div className='flex flex-col justify-between items-center mt-8'>
          <h1 className='text-left text-2xl my-6 '>Notes & PYQs</h1>
          <div className='grid grid-cols-4 gap-16 '>
            {
              
              Dept[index].semester.map(({ id, subjects,name }: any) => (
                <div key={id} className='flex flex-col justify-between items-center gap-4'>
                  <h1>{name}</h1>
                <Card  sub={subjects}></Card>
                </div>
              ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}
