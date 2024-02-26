import { Avatar, AvatarGroup, Box, Button, Card, Flex, Image, Link, Text } from '@chakra-ui/react'
import { IoHear, IoHeartOutline } from 'react-icons/io5'

const Nft = (props) => {
    const { name, author, bidders, image, currentbid, download } = props

    return (
        <Card>
            <Flex direction={'column'} justify={'center'} p={'1rem'}>
                <Box pos={'relative'} borderRadius={'xl'} overflow={'hidden'}>
                    <Image src={image} alt="NFT" w={'100%'} h={'100%'} objectFit={'cover'} />
                    <Button
                        variant="link"
                        pos={'absolute'}
                        top={3}
                        right={3}
                        w={41}
                        h={41}
                        borderRadius={'full'}
                        fontSize={24}
                        bg={'white'}
                        color={'primary'}
                    >
                        {/* <IoHeart /> */}
                        <IoHeartOutline />
                    </Button>
                </Box>
                <Flex flexDirection="column" justify="space-between" h="100%">
                    <Flex
                        justify="space-between"
                        direction={{
                            base: 'row',
                            md: 'column',
                            lg: 'row',
                            xl: 'column',
                            '2xl': 'row',
                        }}
                        mb="auto"
                    >
                        <Flex direction="column">
                            <Text
                                fontSize={{
                                    base: 'xl',
                                    md: 'lg',
                                    lg: 'lg',
                                    xl: 'lg',
                                    '2xl': 'md',
                                    '3xl': 'lg',
                                }}
                                mb="5px"
                                fontWeight="bold"
                                me="14px"
                            >
                                {name}
                            </Text>
                            <Text
                                color="secondaryGray.600"
                                fontSize={{
                                    base: 'sm',
                                }}
                                fontWeight="400"
                                me="14px"
                            >
                                {author}
                            </Text>
                        </Flex>
                        <AvatarGroup
                            max={3}
                            // color={textColorBid}
                            size="sm"
                            mt={{
                                base: '0px',
                                md: '10px',
                                lg: '0px',
                                xl: '10px',
                                '2xl': '0px',
                            }}
                            fontSize="12px"
                        >
                            {bidders.map((avt, key) => (
                                <Avatar key={key} src={avt} />
                            ))}
                        </AvatarGroup>
                    </Flex>
                    <Flex
                        align="start"
                        justify="space-between"
                        direction={{
                            base: 'row',
                            md: 'column',
                            lg: 'row',
                            xl: 'column',
                            '2xl': 'row',
                        }}
                        mt="25px"
                    >
                        <Text fontWeight="700" fontSize="sm">
                            Current Bid: {currentbid}
                        </Text>
                        <Link
                            href={download}
                            mt={{
                                base: '0px',
                                md: '10px',
                                lg: '0px',
                                xl: '10px',
                                '2xl': '0px',
                            }}
                        >
                            <Button
                                variant="darkBrand"
                                color="white"
                                fontSize="sm"
                                fontWeight="500"
                                borderRadius="70px"
                                px="24px"
                                py="5px"
                            >
                                Place Bid
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Nft
