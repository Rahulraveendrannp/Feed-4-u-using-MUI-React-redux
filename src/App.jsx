
import { Box, Stack } from '@mui/system'
import Sidebar from './componets/Sidebar'
import Feed from './componets/Feed'
import Rightbar from './componets/Rightbar'
import Navbar from './componets/Navbar'
import Add from './componets/Add'
import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'


function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>


      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />

      </Box>
    </ThemeProvider>
  )
}

export default App
