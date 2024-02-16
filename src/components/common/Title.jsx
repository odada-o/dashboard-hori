import { Heading } from '@chakra-ui/react'

const Title = (props) => {
    return (
        <Heading as={'h3'} my={30} fontSize={30} fontWeight={700} color={'#222'}>
            {props.children}
        </Heading>
    )
}

export const TitleH2 = (props) => {
    return (
        <Heading as={'h2'} fontSize={'1.25rem'} fontWeight={700}>
            {props.children}
        </Heading>
    )
}

export const TitleH4 = (props) => {
    return (
        <Heading as={'h4'} my={30} fontSize={20} fontWeight={700} color={'darkblue'}>
            {props.children}
        </Heading>
    )
}

export default Title
