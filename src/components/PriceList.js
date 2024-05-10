import React from 'react'
import Price1 from './price/Price1';
import Price2 from './price/Price2';
import Price3 from './price/Price3';



function PriceList() {
    const satu = 130;
    const dua = 165;
    const tiga = 210;
  return (
    <div>

<div class="flex flex-wrap place-content-center gap-4 ">
  <div class=" text-white bg-gray-400"><Price1 satu = {satu}/></div>
  <div class="text-white bg-gray-500"><Price2 dua = {dua}/></div>
  <div class=" text-white bg-gray-400"><Price3 tiga = {tiga}/></div>
</div>

{/* <div class="">
    <div class="bg-white rounded-md">
        <div class="flex justify-start md:justify-between lg:justify-evenly place-content-center">
  <div class="flex-1 m-4 p-0.5 rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300"><Price1 satu = {satu}/></div>
  
  <div class="flex-1 m-4 p-0.5 rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300"><Price2 dua = {dua}/></div>
  
  <div class="flex-1 m-4 p-0.5 rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300"><Price3 tiga = {tiga}/></div>
</div>

    </div>
</div> */}

</div>


    
  )
}

export default PriceList