import Routers from './Routers'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
// import './assets/scss/style.scss' scss 사용시 주석 해제
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Routers />
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default App
