import Gallery from "../component/Gallery"

import Ichika01 from "../assets/img/Hoshino Ichika7-pj_sekai.jpg"
import Ichika02 from "../assets/img/Hoshino Ichika13-pj_sekai.jpg"
import Ichika03 from "../assets/img/Hoshino Ichika6-pj_sekai.jpg"
import Ichika04 from "../assets/img/Hoshino Ichika10-pj_sekai.jpg"

import Ichika2D01 from "../assets/img/Ichika_2DMV-purpose- Leo_need.jpg"
import Ichika2D02 from "../assets/img/Ichika_2DMV-てらてら-Leo_need.jpg"
import Ichika2D03 from "../assets/img/Ichika_2DMV-天ノ弱-Leo_need .jpg"
import Ichika2D04 from "../assets/img/Ichika_2DMV-星を繋ぐ-Leo_need.jpg"

import Ichika3D01 from "../assets/img/Ichika 3d-01.jpg"
import Ichika3D02 from "../assets/img/Ichika 3d-00.jpg"
import Ichika3D03 from "../assets/img/Ichika 3d-02.jpg"
import Ichika3D04 from "../assets/img/Ichika 3d-04.jpg"

export default function Page03() {

  const galleryDatas = [
    {
      title: "CARD",
      image: [Ichika01, Ichika02, Ichika03, Ichika04],
    },
    {
      title: "2D MV",
      image: [Ichika2D01, Ichika2D02, Ichika2D03, Ichika2D04],
    },
    {
      title: "3D MV",
      image: [Ichika3D01, Ichika3D02, Ichika3D03, Ichika3D04],
    },
  ]

  const galleryCollection = galleryDatas.map(galleryData => <Gallery title={galleryData.title} key={galleryData.title} images={galleryData.image}></Gallery>)

  return <>
    <div className="min-h-screen bg-cover bg-black py-4 px-8 text-white overflow-x-hidden">
      <h2
      data-aos="zoom-in"
      className="text-4xl tracking-wide text-center font-title mb-8">
        Ichika's Costumes
      </h2>
      
      {galleryCollection}
    </div>
  </>
}