import React from 'react'

function Price2(props) {
  return (
    <div class="border-transparent relative mx-auto max-w-md rounded-3xl bg-gradient-to-tr from-pink-300 to-red-400 p-1 shadow-lg">
    <div class="bg-white p-7 rounded-3xl">
    
    <div class="relative max-w-xl mx-auto">
       <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    
    </div> 
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Paket Rakyat 2</h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
    <span class="text-3xl font-semibold">Rp.</span>
    <span class="text-5xl font-extrabold tracking-tight">{props.dua}</span>
    <span class="text-2xl font-bold">.000</span>
    <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/bulan</span>
    </div>
    <ul role="list" class="space-y-5 my-7">
    <li class="flex items-center">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Kecepatan Internet Up to 15mbps Unlimited</span>
    </li>
    <li class="flex">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Free Biaya Perbaikan Selamanya</span>
    </li>
    <li class="flex">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Optimal 6-7 Perangkat</span>
    </li>
    <li class="flex line-through decoration-gray-500">
    <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 ms-3">Wifi Support 5Ghz band</span>
    </li>
    
    </ul>
    <div class="flex items-center justify-center">
                 <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-bold rounded-full my-6 py-4 px-20 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                   Choose plan
                 </button>
               </div>
    </div>
    </div>
   
  )
}

export default Price2