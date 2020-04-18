import React from 'react';

const MainContainer = ({
  title = 'Title',
  description = 'Description',
  className,
  children
}) => (
    <div>
      <div>
        <h2>{title}</h2>
        <p className='lead'>{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  )

export default MainContainer;