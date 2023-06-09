/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[700px] ">
      <Image 
      src="https://links.papareact.com/0fm"
      alt=""
      layout="fill"
      object-fit="cover"
      />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-xs cursor-pointer sm:text-sm md:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="px-8 py-3 my-3 font-bold text-purple-500 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90 transition-150">I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner