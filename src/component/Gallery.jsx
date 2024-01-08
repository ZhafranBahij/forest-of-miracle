export default function Gallery({title, images}){

  let delay = 0;

  const imageCollection = images.map(image => 
    <img 
    data-aos="flip-left"
    data-aos-duration="700"
    // data-aos-delay={delay += 200}
    src={image} alt="" key={image} className="rounded-md" 
    />
  )

  return <>
  <div className="my-16">
    <h2
    data-aos="zoom-in"
    className="text-xl tracking-wide w-1/3 font-title mb-2 text-green-400"
    >
      {title}
    </h2>
    <div className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-y-4">
      {imageCollection}
    </div>
  </div>
  </>
}