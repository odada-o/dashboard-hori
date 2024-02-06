import Title, { TitleH4 } from '../../components/common/Title'
import { Section } from '../../components/layout/Container'
import Layout from '../../components/layout/Layout'
import MainSlide from './components/MainSlide'
import { Container } from '@chakra-ui/react'

const Home = () => {
    return (
        <>
            <MainSlide />
            <Section isLightBackground={true}>
                <Container>
                    <Title>회사 소개</Title>
                    <TitleH4>사장님 말씀</TitleH4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste
                    sint provident tempore mollitia. Deserunt labore ipsa quod odit dolore animi repudiandae vero
                    dolorum delectus similique?
                    <TitleH4>사모님 말씀</TitleH4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste
                    sint
                </Container>
            </Section>
            <Section>
                <Container>
                    <Title>회사 비전</Title>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere. Ex asperiores maiores atque,
                    ipsam laboriosam neque inventore molestias libero corrupti maxime? Iusto accusamus magni quis
                    dolorem voluptatum saepe aut.
                </Container>
            </Section>
            <Section isLightBackground={true}>
                <Container>
                    <Title>회사 소개</Title>
                    <TitleH4>사장님 말씀</TitleH4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste
                    sint provident tempore mollitia. Deserunt labore ipsa quod odit dolore animi repudiandae vero
                    dolorum delectus similique?
                    <TitleH4>사모님 말씀</TitleH4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste
                    sint
                </Container>
            </Section>
        </>
    )
}

export default Home
