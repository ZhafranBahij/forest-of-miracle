import ichika_second_page_01 from "../assets/img/forest-page2-01.png"
import ichika_second_page_02 from "../assets/img/forest-page2-02.png"

export default function Page02(){
  return <>
    <div className="h-screen bg-cover bg-green-950 flex flex-col py-4 text-white overflow-x-hidden">
      <div className="basis-2/3 sm:basis-1/3 flex flex-row justify-center items-center">
        <h2
        data-aos="zoom-in"
        className="text-xl sm:text-4xl tracking-wide w-1/2 sm:w-1/3 text-center font-title">
          Oxygen is a miracle, right?
        </h2>
      </div>
      {/* <div 
      style={{backgroundImage: `url(${ichika_second_page})`}} className="block lg:hidden w-screen h-1/3 bg-contain bg-no-repeat basis-1/3 sm:basis-2/3">
      </div> */}
      <div className="w-screen h-1/3 basis-1/3 sm:basis-2/3">
        <img src={ichika_second_page_01} alt="" 
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="750"
          data-aos-mirror="true"
          className="my-2 sm:my-0"
        />
        <img src={ichika_second_page_02} alt="" 
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="750"
          data-aos-mirror="true"
          className="my-2 sm:my-0"
        />
      </div>
    </div>
  </>
}