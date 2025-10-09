

function FirstFile(props){
    return(
        <div>
        <h1>Hello, {props.name}!</h1>
      <p>This is My first Functional Component</p>
            <h3>Age: {props.age}</h3>

        </div>
       
    )
}
export function Profile(){
    return(
        <div>
            <h1>PROFILE</h1>
        </div>
    )
}
export function Setting(){
    return(
        <div>
            <h2> Go to Setting </h2>
        </div>
    )
}
export default FirstFile         