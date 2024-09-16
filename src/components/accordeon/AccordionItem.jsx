import React from 'react';
import css from './Accordeon.module.css';

const AccordionItem = ({ item, handleClick, isOpen }) => {
  return (
    <div className={css.accordionItem}>
      <button className={css.accordionTitle} onClick={handleClick}>
        {item.title}
      </button>
      {isOpen && (
        <div className={css.accordionContent}>
          {item.content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;