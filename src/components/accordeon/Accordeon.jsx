import { useState } from "react"
import css from "./Accordeon.module.css"
import AccordionItem from "./AccordionItem.jsx"
  
  const Accordion = ({ items }) =>{
    const [openIndex, setOpenIndex] = useState(null)
    const toggleOpen = (index) => {return(setOpenIndex(index === openIndex ? null : index))} 
    return(<ul className={css.accordion}>
        {items.map((item, index) => (
            <AccordionItem key={item.id} item={item} handleClick={() => toggleOpen(index)} isOpen={index === openIndex}/>
        ))}
      </ul>)
  }
  export default Accordion;