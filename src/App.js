import Routers from './Routers'
// import './assets/scss/style.scss'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Routers />
        </ChakraProvider>
    )
}

export default App
