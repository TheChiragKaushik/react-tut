
import Card from './components/Card'

import './App.css'

function App() {
  
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
     <Card username="Chirag" btnText='Click Me'/>
     <Card username="Harry" />
     <Card />
    </>
  )
}

export default App
