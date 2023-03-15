const Button = (props) =>{
    return <button onClick={props.callback}>{props.name}</button>;
}

export default Button;