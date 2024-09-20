import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["https://th.bing.com/th?id=OIF.aqI60ITb%2bxGPsPCdvj27qg&rs=1&pid=ImgDetMain", "https://image.springnews.co.th/uploads/images/contents/w1024/2024/09/Hek7ScjSWDHtoQnJCEmv.webp?x-image-process=style/lg-webp"];
  const buttonImages = ["https://th.bing.com/th/id/R.0e536b382ec4703e5b7448e419715c63?rik=ZN8n84tqGd3RvQ&pid=ImgRaw&r=0", 
    "https://png.pngtree.com/png-clipart/20201010/ourlarge/pngtree-orange-pumpkin-cartoon-clipart-png-image_2359861.jpg", "https://th.bing.com/th/id/OIP.3zSE5UYn4LNz1Zj0MyoggQHaHa?rs=1&pid=ImgDetMain"];

  const increaseLevel = (increment) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + increment;
      if (newLevel >= 100) {
        setImageIndex(1);
      }
      return newLevel;
    });
  };

  const resetLevel = () => {
    setLevel(0);
    setImageIndex(0);
  };

  const imageSize = `${Math.max(level * 5, 45)}px`;

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: 0
  };

  const cardStyle = {
    border: "2px dashed",
    padding: "20px",
    width: "500px",
    height: "500px",
    position: "relative",
    overflow: "hidden"
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const buttonImageStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    margin: "10px"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    color: "#34495e",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "36px" }}>Level {level}</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[0]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(10)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(10)} style={buttonText}>
              Level +10
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[1]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(20)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(20)} style={buttonText}>
              Level +20
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImages[2]}
              alt="button"
              style={buttonImageStyle}
              onClick={() => increaseLevel(30)}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={() => increaseLevel(30)} style={buttonText}>
              Level +30
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={resetLevel}
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                cursor: "pointer",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px"
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
