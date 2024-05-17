import React from 'react'
import Price1 from './price/Price1';
import Price2 from './price/Price2';
import Price3 from './price/Price3';



function PriceListRetail() {
    const satu = 130;
    const dua = 165;
    const tiga = 210;
  return (
    <div>

<div class="flex flex-wrap place-content-center gap-4 ">
  <div class=" text-white " ><Price1 satu = {satu}/></div>
  <div class="text-white "><Price2 dua = {dua}/></div>
  <div class=" text-white "><Price3 tiga = {tiga}/></div>
</div>
</div>

    
  )
}

export default PriceListRetail