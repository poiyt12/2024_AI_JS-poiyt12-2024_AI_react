import Button from "./Button";
import ButtonLayout from "./ButtonLayout";
import Circle from "./Circle";
import CircleLayout from "./CircleLayout";
import GridLayout from "./GridLayout";

function App() {
  return (
    <div>
      <GridLayout
        columnNumber={5}
        component={
          <>
            {" "}
            <Button
              backgroundColor="Hover"
              borderRadius="hard"
              text="1번 버튼"
            ></Button>
            <Button
              backgroundColor="Primary"
              borderRadius="smooth"
              text="2번 버튼"
            ></Button>
            <Button
              backgroundColor="Deactive"
              borderRadius="circle"
              text="3번 버튼"
            ></Button>
            <Circle backgroundColor="red"></Circle>
            <Circle backgroundColor="green"></Circle>
            <Circle backgroundColor="yellow"></Circle>
            <Circle backgroundColor="black"></Circle>
            <Circle backgroundColor="blue"></Circle>
            <Circle backgroundColor="red"></Circle>
            <Circle backgroundColor="green"></Circle>
            <Circle backgroundColor="yellow"></Circle>
            <Circle backgroundColor="black"></Circle>
            <Circle backgroundColor="blue"></Circle>
            {["pink", "silver", "skyblue", "purple", "gold"].map((v) => (
              <Circle backgroundColor={v} />
            ))}
          </>
        }
      ></GridLayout>
    </div>
  );
}

export default App;

// 버튼 3개 하드 스무스 서클 + 색깔 만드는거 까지
// 써클 백그라운드 되도록 만들기
// 버튼 n줄 받아서 버튼 레이아웃
// 서클 n줄 받아서 서클 레이아웃
