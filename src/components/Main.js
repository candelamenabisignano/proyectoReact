import React from 'react'
import ImgMain from "../assets/pastriePink.jpg"
import TituloMain from './TituloMain'
const Main = () => {
  return (
    <div>
        <main>
            <section className='h-[550px]'>
                <img src={ImgMain} alt='section-background-img-macarons' className='h-full w-full'/>
                <TituloMain TituloGrande={"Nuestras delicias"} TituloChico={"que te inspiran en tu dia a dia."}/>
            </section>
        </main>
    </div>
  )
}

export default Main
