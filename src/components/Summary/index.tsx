import { useRef } from "react";
import { Container, SummaryContainer, SummaryContent } from "./styles";

export const Summary = () => {
  const ref = useRef(null);
  return (
    <Container ref={ref}>
      <SummaryContainer drag="x" dragConstraints={ref} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}>
        <SummaryContent />
        <SummaryContent />
        <SummaryContent />
      </SummaryContainer>
    </Container>
  );
};
