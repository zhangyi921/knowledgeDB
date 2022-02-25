import { useState } from 'react'
import './App.css'

type DropZoneStatus = 'empty' | 'entered' | 'droped'

function App() {
  const [box1State, setBox1State] = useState<DropZoneStatus>('empty')
  const [box2State, setBox2State] = useState<DropZoneStatus>('empty')

  return (
    <div className="App">
      <header className="App-header">
        <div className={`Drop-zone-${box1State}`}
          onDrop={e => {console.log(e.dataTransfer.getData('id')); setBox1State('droped')}}
          onDragOver={e => e.preventDefault()} // most places are valid drop zone, so it's not allowed to drop by default! PreventDefault so that onDrop works!
          onDragEnter={e => box1State !== 'droped' && setBox1State('entered')}
          onDragLeave={e => box1State !== 'droped' && setBox1State('empty')}></div>

        <div className={`Drop-zone-${box2State}`}
          onDrop={e => setBox2State('droped')}
          onDragOver={e => e.preventDefault()}
          onDragEnter={e => box2State !== 'droped' && setBox2State('entered')}
          onDragLeave={e => box2State !== 'droped' && setBox2State('empty')}></div>

        <div className='Dragable-object' draggable onDragStart={e => e.dataTransfer.setData('id', '1234')}>Drag me!</div>
        <button onClick={() => {setBox1State('empty'); setBox2State('empty')}}>Reset</button>
      </header>
    </div>
  )
}

export default App
