export default function Page04(){
  return <>
    <div className="h-screen flex flex-col justify-center bg-blue-950 px-8 text-white/50 overflow-x-hidden">
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
        <span className="font-bold text-blue-300"> Hoshino (星乃) </span>: 
        <span className="font-bold text-blue-300"> Hoshi (星) </span> means "star" and 
        <span className="font-bold text-blue-300"> No (乃) </span> means "from; possessive particle".
      </p>
      <p
      data-aos="fade-left"
      data-aos-delay="400"
      data-aos-duration="750"
      className="text-xl tracking-wide text-center font-desc">
        <span className="font-bold text-blue-300"> Ichika (一歌) </span>: 
        <span className="font-bold text-blue-300"> Ichi (一) </span> means "one" and 
        <span className="font-bold text-blue-300"> Ka (歌) </span> means "song; singing". 
        Together this means "one song".
      </p>
    </div>
  </>
}