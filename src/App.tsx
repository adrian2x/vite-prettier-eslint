import React, { useState } from 'react'
import { Box, Heading, Button } from 'theme-ui'

import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box m={20} mt={40} p={15}>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <Heading>Vite + React</Heading>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </Box>
  )
}

export default App
