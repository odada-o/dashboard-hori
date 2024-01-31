import { Container } from '@chakra-ui/react'

const ContainerLg = (props) => {
    return (
        <Container maxW={1280} mx={'auto'} px={['20px', null, 0]}>
            {props.children}
        </Container>
    )
}

export default ContainerLg
