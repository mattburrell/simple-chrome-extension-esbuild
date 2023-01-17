export function HelloWorld() {
  const handleOnClick = () => {
    alert("You clicked me!");
  };

  return (
    <div className="content">
      <h1>Hello World!</h1>
      <button onClick={handleOnClick}>Click Me</button>
    </div>
  );
}
