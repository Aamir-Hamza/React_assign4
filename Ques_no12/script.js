const UncontrolledForm = () => {
  const inputRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const enteredText = inputRef.current.value;
    if (enteredText.trim() === "") {
      alert("Input cannot be empty.");
      return;
    }
    alert(`You entered: ${enteredText}`);
    inputRef.current.value = ""; 
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", textAlign: "center" }}>
      <div>
        <input
          type="text"
          placeholder="Enter something"
          ref={inputRef}
          style={{ padding: "5px", width: "200px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Submit
        </button>
      </div>
    </form>
  );
};

 function App(){
    return(<>
    
    <UncontrolledForm/>
    </>)
 }



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);