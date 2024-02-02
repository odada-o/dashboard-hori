import { Container, Box } from '@chakra-ui/react'

const ContainerLg = (props) => {
    return (
        <Container maxW={1280} mx={'auto'} px={['20px', null, 0]}>
            {props.children}
        </Container>
    )
}

export const Section = (props) => {
    // 삼항 연산자
    // 조건 ? 참일 때 : 거짓일 때
    const backgroundColor = props.isLightBackground ? 'white' : 'gray.100'
    return (
        <Box py={'100px'} bg={backgroundColor}>
            {props.children}
        </Box>
    )
}

export default ContainerLg
