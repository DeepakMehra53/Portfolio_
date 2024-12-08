// eslint-disable-next-line no-unused-vars
import {React } from 'react'
import { WavyBackground } from './wavy-background'
// eslint-disable-next-line no-unused-vars
import Navbar from './Navbar'
export  function WavyBackgroundFront(){
    return(
        <>
        <Navbar/>
        <div className='relative re overflow-hidden'>

        <WavyBackground className="max-w-2xl mx-auto pb-40  ">
            <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center " style={{fontFamily: '"Playfair Display", serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 700, // Replace with your desired weight (e.g., 400, 900)
                    fontStyle: 'italic',}}>Deepak Mehra</p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"style={{fontFamily: '"Playfair Display", serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 700, // Replace with your desired weight (e.g., 400, 900)
                    fontStyle: 'italic',}} ></p>
        </WavyBackground>
        </div>
        </>
    )
}
