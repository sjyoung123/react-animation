import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: ghostwhite;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

const Overlay = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

const overlay: Variants = {
  initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
  animate: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => {
          return (
            <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
          );
        })}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlay}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: "400px" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
