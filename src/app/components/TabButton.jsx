import React from 'react'

const TabButton = ({active, selectTab, children}) => {

const buttonClasses = active ? 'text-white border-b border-blue-400' : "text-white"
    return (
    <button onClick = {selectTab}>
        <p className={'text-slate-200 mr-3 font-semibold hover:text-white border-b border-blue-400 ${buttonClasses}'}>
            {children}
        </p>
    </button>
    )
}

export default TabButton