'use client'
import React, { useState } from 'react';
import { Projects } from '@/data/data';
import Portfoliocard from './Portfoliocard';

const Portfolio: React.FC = () => {
  const itemsPerPage = 3;
  const [displayedProjects, setDisplayedProjects] = useState(Projects.slice(0, itemsPerPage));

  const handleLoadMore = () => {
    const currentLength = displayedProjects.length;
    const newProjects = Projects.slice(currentLength, currentLength + itemsPerPage);
    setDisplayedProjects([...displayedProjects, ...newProjects]);
  };

  return (
    <section className='w-full h-fit px-4 py-8 space-y-4' id='portfolio'>
      <h6 className='text-gray-600 w-full text-center capitalize'>Portfolio</h6>
      <h3 className='capitalize text-xl leading-relaxed'>lets have a look at <br /> my portfolio</h3>
      <div className='flex gap-4 justify-center items-center flex-wrap '>
        {displayedProjects.map((item) => (
          <Portfoliocard project={item} key={item.id} />
        ))}
      </div>
      {displayedProjects.length < Projects.length && (
        <button className='text-green-600 text-xs' onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default Portfolio;
