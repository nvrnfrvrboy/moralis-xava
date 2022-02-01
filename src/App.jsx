import { useMoralis } from 'react-moralis'

import Header from './components/Header'
import Preamble from './components/Preamble'
import Mockup from './components/Mockup'
import Appendix from './components/Appendix'

function App () {
  const { authenticate, isAuthenticated, user } = useMoralis()

  if (!isAuthenticated) {
    return (
      <div>
        <button
          className='text-3xl text-white bg-lime-500 px-3 py-1 border-4 border-lime-700 rounded-lg m-5'
          onClick={() => authenticate()}
        >
          Authenticate
        </button>
      </div>
    )
  }

  return (
    <div className='App'>
      <div>{/* <h1>Welcome {user.get('username')}</h1> */}</div>
      <Header />
      <Preamble />
      <Mockup />
      <Appendix />
    </div>
  )
}

export default App
