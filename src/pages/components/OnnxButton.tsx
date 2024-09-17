import * as onnx from "onnxruntime-web";

onnx.env.wasm.proxy = true;

const modelBytes = new Uint8Array([
  8, 3, 18, 12, 98, 97, 99, 107, 101, 110, 100, 45, 116, 101, 115, 116, 58, 98,
  10, 17, 10, 1, 97, 10, 1, 98, 18, 1, 99, 34, 6, 77, 97, 116, 77, 117, 108, 18,
  14, 116, 101, 115, 116, 95, 109, 97, 116, 109, 117, 108, 95, 50, 100, 90, 19,
  10, 1, 97, 18, 14, 10, 12, 8, 1, 18, 8, 10, 2, 8, 3, 10, 2, 8, 4, 90, 19, 10,
  1, 98, 18, 14, 10, 12, 8, 1, 18, 8, 10, 2, 8, 4, 10, 2, 8, 3, 98, 19, 10, 1,
  99, 18, 14, 10, 12, 8, 1, 18, 8, 10, 2, 8, 3, 10, 2, 8, 3, 66, 2, 16, 9,
]);

export default function OnnxButton() {
  return (
    <button
      onClick={async () => {
        const session = await onnx.InferenceSession.create(modelBytes);

        const a = {
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          dims: [3, 4],
        } as const;

        const b = {
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          dims: [4, 3],
        } as const;

        const tensors = {
          a: new onnx.Tensor("float32", a.data, a.dims),
          b: new onnx.Tensor("float32", b.data, b.dims),
        };

        const { c } = await session.run(tensors);

        const result = Array.from(c.data as Float32Array);

        console.log(result);
      }}
    >
      Run
    </button>
  );
}
