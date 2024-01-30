import Routers from './Routers'
// import './assets/scss/style.scss'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <Routers />
        </ChakraProvider>
    )
}

export default App
