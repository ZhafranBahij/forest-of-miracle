export default function Page04(){
  return <>
    <div className="h-screen flex flex-col justify-center bg-green-950 px-8 text-white/50 overflow-x-hidden">
      <h2
      data-aos="zoom-in"
      className="text-4xl tracking-wide text-center font-title mb-8 text-white">
        Etymology
      </h2>
      <p
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="750"
      className="text-xl tracking-wide text-center font-desc mb-4">
        <span className="font-bold text-green-300"> Forest: </span> 
        means a large tract of land covered with trees and underbrush 
      </p>
      <p
      data-aos="fade-left"
      data-aos-delay="400"
      data-aos-duration="750"
      className="text-xl tracking-wide text-center font-desc">
        <span className="font-bold text-green-300"> Miracle: </span> 
        such an effect or event manifesting or considered as a work of God.
      </p>
    </div>
  </>
}