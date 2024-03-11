import './App.css'

function App() {
  
  return (
    <>
      <div className='app'>
          <Header />
          <Form />
          <List />
          <Stats />
      </div>
    </>
  )
}

export default App


function Header () {
  
  return (
    <header className='header'>
      <h1>📋 CHECK LIST ✔️</h1>
    </header>
  )
  
}

function Form () {
  return (
    <div className='add-form'>
      <h3> Anything you need please add more 📝</h3>
    </div>
  )
}

function List () {
  return (
    <div className='list'>
      <ul>
        List
      </ul>
    </div>
  )
}

function Stats () {
  return (
    <footer className='stats'>
      <h3> Total </h3>
    </footer>
  )
}
