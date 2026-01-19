import React from 'react';
import CategoriBg from '../assets/images/CategoriBg.png';

interface CategoryHeroProps {
  title: string;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title }) => {
  return (
    <div 
      className="relative bg-cover bg-center py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${CategoriBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center">
          <h1 className="section-heading text-[40px] sm:text-[50px] lg:text-[60px]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
