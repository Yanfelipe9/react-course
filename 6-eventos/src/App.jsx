function App() {

  function handleScroll(event){
    console.log(event)
  }

  window.addEventListener('scroll', handleScroll)
  return (
    <>
    <div style={{height: '200vh'}}>

      <button onClick={(event) => alert(event.target.innerText)}>Camisa</button>
    </div>
    </>
  )
}

export default App
