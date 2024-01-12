"use client"

import { useState } from "react";
import { SliderItem } from "@/components/widgets/slider-item";
import { Arrows } from "@/components/widgets/arrows";
import { SliderThumbnailItem } from "@/components/widgets/slider-thumbnail-item";

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

const onPrev = () => {
  setItemActive(itemActive - 1);
  if (itemActive === 1) {
    setItemActive(countItems);
  }
}

const onNext = () => {
  setItemActive(itemActive + 1);
  if (itemActive >= countItems) {
    setItemActive(1);
  }
}

  return (
    <div className="h-screen relative">
      <ul>
        <SliderItem 
          itemActive={itemActive}
          id={1}
          image="/imgs/1.webp"
          brand="Dodge"
          name="Challenger"
          desc="The Dodge Challenger, an icon of American motoring, has been roaring on the roads since 1970. Its powerful engine and “muscle car” style make it a popular choice among sports car enthusiasts."
        />

<SliderItem 
          itemActive={itemActive}
          id={2}
          image="/imgs/2.webp"
          brand="Chevrolet"
          name="Camaro"
          desc="The Chevrolet Camaro, a bold and dynamic sports car, made its debut in 1966. With its exceptional performance and daring design, the Camaro is a testament to American ingenuity and innovation."
        />

<SliderItem 
          itemActive={itemActive}
          id={3}
          image="/imgs/3.webp"
          brand="Ford"
          name="Mustang"
          desc="The Ford Mustang, introduced in 1964, is more than just an American sports car. With its impressive performance and iconic design, the Mustang has left an indelible mark on automotive history."
        />

<SliderItem 
          itemActive={itemActive}
          id={4}
          image="/imgs/4.webp"
          brand="Jeep"
          name="Jeep"
          desc="Jeep, founded in 1941, is an American brand that has earned a reputation for its robust and versatile off-road vehicles. Jeep vehicles are designed to overcome any challenge, whether in the city’s asphalt jungle or the toughest terrains.
          "
        />
        <SliderItem 
          itemActive={itemActive}
          id={5}
          image="/imgs/5.webp"
          brand="Cadillac"
          name="CTS-V"
          desc="The Cadillac CTS-V is a high-performance sedan that combines the elegance of luxury with the thrill of power. Manufactured by Cadillac, the CTS-V is the embodiment of sophistication and speed."
        />
      </ul>
      <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()}/>
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
        <SliderThumbnailItem itemActive={itemActive} image="/imgs/1.webp" id={1} name="Challenger" onClick={() => setItemActive(1) }/>
        <SliderThumbnailItem itemActive={itemActive} image="/imgs/2.webp" id={2} name="Camaro" onClick={() => setItemActive(2) }/>
        <SliderThumbnailItem itemActive={itemActive} image="/imgs/3.webp" id={3} name="Mustang" onClick={() => setItemActive(3) }/>
        <SliderThumbnailItem itemActive={itemActive} image="/imgs/4.webp" id={4} name="jeep" onClick={() => setItemActive(4) }/>
        <SliderThumbnailItem itemActive={itemActive} image="/imgs/5.webp" id={5} name="CTS-V" onClick={() => setItemActive(5) }/>
      </ul>
    </div>
  )
}


