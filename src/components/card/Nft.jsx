import React, { useState } from 'react'
import { Avatar, AvatarGroup, Box, Button, Card, Flex, Image, Link, Text } from '@chakra-ui/react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

const Nft = (props) => {
    const { name, author, bidders, image, currentbid, download } = props

    const [heart, setHeart] = useState(false)

    return (
        <Card>
            <Flex direction={'column'} justify={'center'} p={'1rem'}>
                <Box pos={'relative'} h={188} borderRadius={'xl'} overflow={'hidden'}>
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
                        onClick={() => setHeart(!heart)}
                    >
                        {heart ? <IoHeart /> : <IoHeartOutline />}
                    </Button>
                </Box>
                <Flex flexDirection="column" justify="space-between" mt={3}>
                    <Flex justify="space-between" mb="auto">
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
                    <Flex align="center" justify="space-between" mt="30px">
                        <Text fontWeight="700" fontSize="sm" color={'primary'}>
                            Current Bid: {currentbid}
                        </Text>
                        <Link href={download}>
                            <Button variant="btnMarket">Place Bid</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Nft
