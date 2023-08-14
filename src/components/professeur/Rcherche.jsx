import React from 'react'

const Rcherche = () => {
  return (
    
        <div class='w-xs-100 p-2  col-xs-12'>
        <label class="relative ">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-8 w-8 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-100 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search Professeurs" type="text" name="search"/>
</label>
</div>
    
  )
}

export default Rcherche