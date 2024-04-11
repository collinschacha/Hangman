const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const Body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      right: "0px",
      top: "120px",
    }}
  />
);

const RightArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "-100px",
      top: "150px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "10px",
      top: "150px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RightLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "-90px",
      top: "210px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "0px",
      top: "210px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type HangManDrawingProps = {
  numberOfGuesses: number;
};

const HangManDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BodyParts.slice(0, numberOfGuesses)}

      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          top: "0px",
          right: "0px",
          position: "absolute",
        }}
      />

      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
};

export default HangManDrawing;
