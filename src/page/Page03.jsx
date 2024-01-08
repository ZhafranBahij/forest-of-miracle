import Gallery from "../component/Gallery"

import Forest01 from "../assets/img/Forest-01.jpg"
import Forest02 from "../assets/img/Forest-02.jpg"
import Forest03 from "../assets/img/Forest-03.jpg"
import Forest04 from "../assets/img/Forest-04.jpg"
import Forest05 from "../assets/img/Forest-05.jpg"
import Forest06 from "../assets/img/Forest-06.jpg"

export default function Page03() {

  const galleryDatas = [
    {
      title: "Glorious Forest",
      image: [Forest01, Forest02, Forest03, Forest04, Forest05, Forest06],
    },
  ]

  const galleryCollection = galleryDatas.map(galleryData => <Gallery title={galleryData.title} key={galleryData.title} images={galleryData.image}></Gallery>)

  return <>
    <div className="min-h-screen bg-cover bg-black py-4 px-8 text-white overflow-x-hidden">
      <h2
      data-aos="zoom-in"
      className="text-4xl tracking-wide text-center font-title mb-8">
        Galleries
      </h2>
      
      {galleryCollection}
    </div>
  </>
}