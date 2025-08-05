import { useEffect, useRef, useState } from "react";

import { CarouselItem, CarouselTrack, SliderWrapper } from "./styles";

import { SliderProps } from "./types";
import { useDragControls } from "framer-motion";
import { CAROUSEL_GAP_PX, MOBILE_CAROUSEL_ITEM_WIDTH_PX } from "./constants";

export default function Slider<T>({ items, renderItem }: SliderProps<T>) {
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Olá queridos,
  // Fiz uma pequena alteração aqui. Para que o carrossel
  // pudesse ser puxado até o fim, ele precisa assumir o tamanho
  // total, incluindo os espaçamentos e o tamanho de cada card.
  // Por isso agora temos o arquivo de constantes, para podermos ter
  // controle dos tamanhos - se for necessário alterar o tamanho dos cards
  // ou do espaçamento, ele já vai fazer o cálculo da largura com esses
  // valores.

  const updateCarouselWidth = () => {
    if (carouselContainerRef.current) {
      const totalWidth =
        (items?.length - 1) * MOBILE_CAROUSEL_ITEM_WIDTH_PX +
        (items?.length - 2) * CAROUSEL_GAP_PX;

      console.log(totalWidth);

      setCarouselWidth(totalWidth);
    }
  };

  useEffect(() => {
    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);
  }, []);

  const controls = useDragControls();

  return (
    <SliderWrapper>
      <CarouselTrack
        ref={carouselContainerRef}
        drag="x"
        dragControls={controls}
        dragConstraints={{ right: 0, left: -carouselWidth }}
        style={{ touchAction: "none" }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>{renderItem(item)}</CarouselItem>
        ))}
      </CarouselTrack>
    </SliderWrapper>
  );
}
