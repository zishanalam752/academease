import React from 'react'
import Card from './Card'
const Dept = [
  {
    name: "Computer Science/Information Technology",
    description: "Our Computer Science program equips students with the skills to develop innovative software solutions and excel in domains like artificial intelligence and cybersecurity.",
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
  // console.log("Semester:", Dept[index].semester)
  console.log(Dept[index].semester)
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] mx-auto flex flex-col '>
        <div>
          {/* heading */}
          <h1>{Dept[index].name}</h1>
          {/* description */}
          <p>{Dept[index].description}</p>
        </div>
        {/* notes and pyqs */}
        <div>
          <h1>Notes & PYQs</h1>
          <div>
            {
              
              Dept[index].semester.map(({ id, name }: any) => (
                <Card key={id} sem={name}></Card>
              ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}
