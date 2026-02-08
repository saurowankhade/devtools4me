import React from 'react'

const BadgeWarper = (props)=>{
    const { children,className,textColor } =  props;
    return (
        <span className={`"inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-wider uppercase ${textColor} ${className}`}>
       {children}
      </span>
    )
}


const Badge = {
    Stone: <BadgeWarper {...rest} className='bg-stone-800' textColor='text-stone-0' />
}

export default Badge