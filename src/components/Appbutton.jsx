function AppButton(props)
{
   const btnStyle = {
      border : 0,
      backgroundColor : "Green",
      padding : "2%"
   }
    return(<button style={btnStyle} onClick={props.handleClick}>{props.title}</button>)
}

export default AppButton;