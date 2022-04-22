import React, { useState } from 'react'

const Search = () => {
  const [ searchText, setSearchText ] = useState('')
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input type="text" className="input" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default Search
            
