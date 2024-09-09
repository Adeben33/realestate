import React from 'react';
import Button from './Button'; 
import './ComponentHeader.css'; 

const ComponentHeader = ({ headingText, text, buttonLabel, buttonVariant, className }) => {
  return (
    <div className={`featured-property ${className}`}>
            <div className="featured-properties__text">
                          <div className="heading">
                                  <div className="headingText">
                                         {headingText}  
                                  </div>                   
                                 <span className='text'>{ text }</span>
                            </div>
                <div className="btn">
                      {buttonLabel  ? (
                     <Button label={buttonLabel} variant={buttonVariant} />
                     ) : (
                        null
                    )}
                </div>
            </div> 
        </div>
  )
};

export default ComponentHeader;
