//   const {useState} = React
function App(){
    const [username, Setusername]=  React.useState("")
    function  inputHandler(e){
        Setusername(e.target.value)
        //  console.log(username)
        
    }
     function  submithandler(){
        if(username==""){
            alert("Please enter your username")
        } else{
            alert("your username is "+username)
        }
     }
    return (<>
    <form> 
        <input placeholder="username" value = {username} onChange={inputHandler}></input> <br/>
        <br/>
          <input type = "submit" onClick={submithandler}>
          </input>
        
        </form>
   
    
    </>)
}


const root  = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)