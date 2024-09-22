'use client'
import React, { useState } from 'react'

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="flex justify-center m-5">
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="px-4 py-2 border rounded-lg w-full md:w-1/2" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
    </div>
  )
}

export default SearchInput