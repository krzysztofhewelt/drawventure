import React from 'react';

const IconStar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.323608L9.70101 5.55877L9.72346 5.62786H9.79611H15.3007L10.8474 8.86337L10.7886 8.90608L10.8111 8.97517L12.5121 14.2103L8.05878 10.9748L8 10.9321L7.94122 10.9748L3.48793 14.2103L5.18894 8.97517L5.21139 8.90608L5.15261 8.86337L0.699316 5.62786H6.20389H6.27654L6.29899 5.55877L8 0.323608Z"
        stroke="#FF8551"
        strokeWidth="0.2"
      />
    </svg>
  );
};

IconStar.defaultProps = {
  className: 'fill-white',
};

export default IconStar;
