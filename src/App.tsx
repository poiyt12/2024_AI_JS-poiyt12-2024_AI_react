import Box from "./Box";

function App() {
  return (
    <div>
      <Box
        height="100px"
        width="100px"
        backgroundColor="orange"
        text="안녕"
      ></Box>{" "}
      <Box height="200px" width="200px" backgroundColor="red" text="안녕"></Box>{" "}
      <Box
        height="300px"
        width="300px"
        backgroundColor="yellow"
        text="안녕"
      ></Box>{" "}
      <Box
        height="400px"
        width="400px"
        backgroundColor="blue"
        text="안녕"
      ></Box>
    </div>
  );
}

export default App;
