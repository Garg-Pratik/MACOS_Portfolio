
import WindowControls from '#components/WindowControls';
import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react';
import React from 'react'

function Terminal() {
  return (
 <>
 <div id='window-header'>
    <WindowControls target='terminal'/>
    <h2>Tech Stack</h2>
 </div>
 <div className='techstack'>
    <p>
        <span className='font-bold'>@Pratik % </span>
        show tech stack
    </p>
    <div className='label'>
        <p className='w-32'>Catergory</p>
        <p>Technologies</p>
    </div>
    <ul className='content'>
        {techStack.map(({category,items})=>(
            <li key={category} className='flex items-center'>
                <Check className='check' size={20}/> 
                <h3>{category}</h3>
                <ul>
                    {items.map((item,i)=>(
                        
                        <li key={i}>{item}
                        {i<items.length-1?",":""}
                        </li>

                    ))}
                </ul>
            </li>
        ))}
    </ul>
    <div className='footnote'>
        <p>
            <Check size={20}/>
            stacks loaded sucessfully
        </p>

        <p className='text-black'>
            <Flag size={14} fill='black'/>
            Render time: 10ms
        </p>
    </div>
 </div>
 </>
  )
}

const TerminalWindow=WindowWrapper(Terminal,"terminal")

export default TerminalWindow;
