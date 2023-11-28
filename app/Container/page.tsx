import Image from 'next/image'
import Logo from '../assets/dani.jpg'

export default function Menu(){

        return(
        <>
            <div className="flex bg-slate-900 w-full h-full text-white justify-between pl-40 pr-96 pt-40 pb-56">

            
            <div className="inline-flex pr-10 pl-2 items-center">

            <div className="w-96 h-28 justify-center items-center inline-flex">
            
            <div><span className="text-green-500 text-4xl font-bold font-['DM Sans']">Olá</span>
            <span className="text-stone-50 text-4xl font-bold font-['DM Sans']">, eu sou o<br/>Desevolvedor </span>
            <span className="text-green-500 text-5xl font-bold font-['DM Sans']">Web</span>
            <span className="text-stone-50 text-4xl font-bold font-['DM Sans']"> </span>
            <span className="text-green-100 text-4xl font-bold font-['DM Sans']">Anderson</span>
            <span className="text-stone-50 text-4xl font-bold font-['DM Sans']"> </span>
            <span className="text-green-500 text-4xl font-bold font-['DM Sans']">:)</span>


            <div className="w-96 h-10 bg-slate-900  justify-between items-center inline-flex">

            <button className="w-36  relative top-20 ">
            <div className="w-36  h-10 left-0 top-0  absolute bg-green-500 border-2 border-green-500 rounded-xl"></div>
            <div className="left-[28px] top-[12px] absolute text-center text-black text-sm font-normal font-['DM Sans']">Download CV</div>
            </button>

            <button className="w-36 relative top-20 ">
            <div className="w-36 h-10  top-0 absolute bg-slate-900 border-2  border-green-500 rounded-xl"></div>
            <div className="left-[28px] top-[12px] absolute text-center text-white text-sm font-normal font-['DM Sans']">Download CV</div>
            </button>


            </div>

            
            


 
            </div>
            


            
            </div>
            
            </div>




           
            

            <Image
                src={Logo}
                width={300}
                height={300}
                alt="Picture of the author"
                className="rounded-full"
            />
            
            
        </div>

       



        </>
        // essa page menu
   )
}