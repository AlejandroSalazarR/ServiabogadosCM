import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 60;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    padding-right: 50px;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 30vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
      >
        <g></g>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M8 42v-3h24v3Zm11.1-10.6L8 20.3l3.5-3.6 11.2 11.1Zm12.7-12.7L20.7 7.5 24.3 4l11.1 11.1ZM41.9 40 15.1 13.2l2.1-2.1L44 37.9Z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Serviabogados CM
      </Text>
    </Container>
  );
};

export default Loader;
