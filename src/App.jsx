import Game from './components/Game';

function App() {
  

  return (
    <div className='min-h-screen min-w-screen
                    flex flex-col items-center 
                    bg-gradient-to-b from-slate-900 to-slate-700'>
      <h1 className='text-6xl text-white/80 font-bold py-10'>
        Tic-Tac-Toe
      </h1>
      <Game />
    </div>
  )
}

export default App
