import Routers from './Routers'
// import './assets/scss/style.scss'
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
    components: {
        Button,
    },
})

function App() {
    return (
        <ChakraBaseProvider theme={theme}>
            <Routers />
        </ChakraBaseProvider>
    )
}

export default App
