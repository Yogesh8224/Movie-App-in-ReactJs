import React from 'react'

const Dropdown = ({title,options,func}) => {
  return (
    <div className='select'>
      <select className="px-3 py-2 bg-zinc-800 rounded-lg text-white font-semibold" defaultValue="0" onChange={func} id="format" name="format">
        <option value="0">
            {title}
        </option>
        {options.map((o,i)=>(
            <option key={i} value={o}>{o.toUpperCase()}</option>
       ) )}
      </select>
    </div>
  )
}

export default Dropdown
