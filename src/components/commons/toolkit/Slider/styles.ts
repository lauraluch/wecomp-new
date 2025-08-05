import { motion } from "framer-motion";
import styled from "styled-components";
import { CAROUSEL_GAP_PX, MOBILE_CAROUSEL_ITEM_WIDTH_PX } from "./constants";

export const SliderWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const CarouselTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: fit-content;
  height: 100%;

  gap: ${CAROUSEL_GAP_PX}px;

  padding: 1rem 0;

  cursor: grab;
`;

export const CarouselItem = styled.div`
  width: ${MOBILE_CAROUSEL_ITEM_WIDTH_PX}px;
  max-width: ${MOBILE_CAROUSEL_ITEM_WIDTH_PX}px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TestBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
