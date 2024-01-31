import { Container, Box } from '@chakra-ui/react'

const ContainerLg = (props) => {
    return (
        <Container maxW={1280} mx={'auto'} px={['20px', null, 0]}>
            {props.children}
        </Container>
    )
}

export const Section = (props) => {
    return <Box py={4}>{props.children}</Box>
}

export default ContainerLg
