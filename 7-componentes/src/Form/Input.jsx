export const Input = ({label , id , ...props}) => {
  return (
    <p>
      <label htmlFor={id}>{label} :</label>
      <input id={id} type="text" {...props}/>  
    </p>
  )
}
