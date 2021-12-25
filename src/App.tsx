import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 300px;
  background-color: ghostwhite;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  top: 80px;
`;

const Btn = styled.button``;

const boxVariants: Variants = {
  initial: (isBack: boolean) => {
    return { x: isBack ? -500 : 500, opacity: 0, scale: 0 };
  },
  animate: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
  exit: (isBack) => {
    return {
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 1 },
    };
  },
};

function App() {
  const [showing, setShowing] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const onNext = () => {
    setIsBack(false);
    setShowing((data) => (data === 10 ? 10 : data + 1));
  };

  const onPrev = () => {
    setIsBack(true);
    setShowing((data) => (data === 1 ? 1 : data - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={isBack}>
        <Box
          custom={isBack}
          key={showing}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {showing}
        </Box>
      </AnimatePresence>
      <div style={{ marginTop: "150px" }}>
        <Btn onClick={onPrev}>Prev</Btn>
        <Btn onClick={onNext}>Next</Btn>
      </div>
    </Wrapper>
  );
}

export default App;
