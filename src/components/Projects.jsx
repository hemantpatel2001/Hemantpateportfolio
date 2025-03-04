import React from 'react'
import todolist from '../assets/todolist.png'
import Cards from './Cards'
import Spadurban from "../assets/Spadurban.png"
import CityBazar from "../assets/Citybazar.png"

const Projects = () => {

    const projectJson = [
        {
          title: 'TO Do List',
          desc: 'This is a simple Todo List to manage your tasks efficiently.',
          image:todolist ,
          live: "https://delightful-pika-bc07a2.netlify.app/",
          github: "https://github.com/hemantpatel2001/CODTECH-Task1"
        },
        {
          title: 'Spa durbun',
          desc: 'The platform offers features such as Booking massages, purchasing, and availing other spa services',
          image: Spadurban,
          live: "https://spadurban.co.za/",
          github: ""
        },
        {
          title: 'City Bazar online',
          desc: 'Discover the convenience of shopping locally with City Bazar Online, where you can find the best deals around.git',
          image:CityBazar,
          live: "https://citybazaronline.com/",
      
        },
        
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
