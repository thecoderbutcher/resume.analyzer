import { Toaster } from "react-hot-toast";

const ToastMsg = () => {
  return (
    <div style={{ position: "relative" }}>
      <Toaster
        position="button-center"
        containerStyle={{ position: "absolute" }}
        toastOptions={{
          duration: 2000,
          removeDelay: 1000,
          style: {
            background: "#018d06",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ToastMsg;
