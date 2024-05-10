import React from 'react'

function Price3(props) {
  return (
    <div>
            <div class=" relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
    <div class="bg-white p-7 rounded-md">
    
    <div class="relative max-w-xl mx-auto h-auto">
    <img class=" w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"></img>
    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Paket Rakyat 3</h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
    <span class="text-3xl font-semibold">Rp.</span>
    <span class="text-5xl font-extrabold tracking-tight">{props.tiga}</span>
    <span class="text-2xl font-bold">.000</span>
    <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/bulan</span>
    </div>
    <ul role="list" class="space-y-5 my-7">
    <li class="flex items-center">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Kecepatan Internet Up to 20mbps Unlimited</span>
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
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Optimal 8-9 Perangkat</span>
    </li>
    <li class="flex">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Wifi Support 5Ghz band</span>
    </li>
    
    </ul>

    </div> 
    
    </div> 
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
    </div>
        </div>
  )
}

export default Price3