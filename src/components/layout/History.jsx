import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import DynamicTitle from './DynamicTitle'

const History = () => {
    const location = useLocation() // 현재 경로를 가져옴
    const pathnames = location.pathname.split('/').filter((x) => x) // 경로를 '/'로 나누고 빈 문자열을 제거

    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink as={ReactRouterLink} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((name, index) => {
                // 경로를 순회하며 BreadcrumbItem을 생성
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}` // 현재 경로까지의 경로를 생성
                const isLast = index === pathnames.length - 1 // 현재 경로가 마지막 경로인지 확인
                // 현재 경로이면 isCurrentPage를 true로 설정
                // 현재 경로가 아니면 링크를 생성
                // 첫 글자를 대문자로 변환
                return (
                    <>
                        <BreadcrumbItem key={index} isCurrentPage={isLast}>
                            <BreadcrumbLink as={ReactRouterLink} to={routeTo}>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )
            })}
        </Breadcrumb>
    )
}

export default History
