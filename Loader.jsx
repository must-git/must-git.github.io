import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieLoader from "../public/loading.lottie";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.8s ease",
        zIndex: 9999,
      }}
    >
      <DotLottieReact
        src={lottieLoader}
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Loader;
