/* eslint-disable @next/next/no-img-element */
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {

  function calculateDuration(from: string, to: string): string {
    const start = new Date(from);
    const end = to.toLowerCase() === "present" ? new Date() : new Date(to);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let duration = "";
    if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
    if (months > 0) duration += `${months} mo${months > 1 ? "s" : ""}`;
    return duration.trim() || "Less than 1 mo";
  }

  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'>Work Experience</span>
      </h1>
      <div className='w-full mt-12 grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
              <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>
                <p className="text-start text-lg font-semibold mt-1">
                  {card.company} • {card.location}
                </p>
                <p className="text-sm text-gray-400 text-right">
                  {card.from} – {card.to} · {calculateDuration(card.from, card.to)}
                </p>
                <p className='text-start text-white-100 mt-3 font-semibold'>
                  {card?.desc.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
