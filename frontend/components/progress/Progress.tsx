import { withNProgress } from "@tanem/react-nprogress";
import React from "react";

// components
import Bar from "./Bar";
import Container from "./Container";

const Progress: React.FC<{
  animationDuration: number;
  isFinished: boolean;
  progress: number;
}> = ({ isFinished, progress, animationDuration }) => (
  <Container animationDuration={animationDuration} isFinished={isFinished}>
    <Bar animationDuration={animationDuration} progress={progress} />
  </Container>
);

export default withNProgress(Progress);
