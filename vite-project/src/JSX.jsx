function JSX() {
  const name = "Welcome to Vite + React ";
  const clicked = () => alert(`Hello, ${name}!`);

  return (
    <div style={{ textAlign: "center", marginTop: "px" }}>
      
      <h1 style={{ color:"indigo" }}> {name}!</h1>
      <button
        onClick={clicked}
        style={{
            backgroundColor :"royalblue",
          padding: "20px 30px",
          fontSize: "20px",
          borderRadius: "15px",
          cursor:"col-resize",

        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default JSX;
