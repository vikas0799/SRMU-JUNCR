import React from 'react';
import './Card.css'

  const arr = [
   {
    name: 'Joe', work: 'freelance-developer',
    blogs: '54', websites: '32',
    hackathons: '6', location: 'morocco', id: '0',
  },
  {
    name: 'janet', work: 'fullstack-developer', 
    blogs: '34', websites: '12', 
    hackathons: '8', location: 'Mozambique', id: '1',
  },

];

function Card() {

  return (
    <>
    {
      arr.map((element)=> {
      return (
        <main>
            <div key={element.id}>
          <p>Applicant Name: {element.name}</p>
          <p>Applicant location: {element.location}</p>
          <p>Hackathons participated: {element.hackathons}</p>
          <h1>${element.work}</h1>

        </div>
        </main>
      )
    })
    }
    </>
  );
};




export default Card;