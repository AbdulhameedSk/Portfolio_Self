import React from 'react'
import Carousel from './carousel'
const slides = [
  {
    title: "Sky_Connect",
    button: "CODE",
    src: "/airplane.jpg",
    descripion:<ul>
    <li>Developed a Java-based airline reservation system with MySQL database integration, enabling users to search flights, make reservations, and view booking details.</li>
    <li>Designed and implemented a structured database schema with JDBC connectivity to ensure efficient data storage, retrieval, and seat management.</li>
    <li>Built a user-friendly command-line interface with clear prompts for seamless interaction, preventing duplicate seat assignments.</li>
    <li>Provided a well-documented installation guide for easy deployment, ensuring compatibility with JDK 8+ and MySQL environments.</li>
  </ul>
  },
  {
    title: "AlumNexus",
    button: "Visit Now",
    src: "/alumni.jpg",
    description:<ul>
    <li>Designed and implemented a scalable frontend using React.js, improving UI responsiveness and accessibility.</li>
    <li>Integrated AWS S3 for efficient media storage, enabling users to share high-quality images and videos.</li>
    <li>
    Developed an authentication system using JWT, ensuring secure user access and data protection.
    </li>
    <li>
    Implemented real-time updates using WebSockets, enhancing user engagement and interaction.
    </li>
    <li>
    Conducted thorough testing and debugging, reducing system crashes and improving stability.

    </li>
  </ul>
  },
  {
    title: "Travel Tales",
    button: "CODE",
    src: "/travel.jpg",
  },
];


const Projects = () => {
  return (
    <div className='h-screen text-white'>
<Carousel slides={slides} />
</div>
  )
}

export default Projects