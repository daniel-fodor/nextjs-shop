import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <Image src={loader} height={150} width={150} alt="Loading..." loading="eager" />
    </div>
  );
};

export default LoadingPage;
