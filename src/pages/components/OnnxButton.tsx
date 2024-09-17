export default function OnnxButton() {
  return (
    <button
      onClick={async () => {
        const onnx = await import("onnxruntime-web/webgpu");

        console.log(onnx.InferenceSession.create("we"));
      }}
    >
      Run
    </button>
  );
}
