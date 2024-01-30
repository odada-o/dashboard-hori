import Footer from './Footer'
import Header from './Header'
import { Container } from '@chakra-ui/react'

const Layout = (props) => {
    return (
        <>
            <Header />
            <main id="main">
                <h2>{props.title}</h2>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
