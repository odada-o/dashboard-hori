// Chakra imports
import { Box, Flex, Text, Icon, useColorModeValue, Checkbox, Card, CardHeader, CardBody } from '@chakra-ui/react'

// Assets
import { MdDragIndicator } from 'react-icons/md'
import React from 'react'
import { TitleH2 } from '../../../components/common/Title'

export default function Tasks() {
    // Chakra Color Mode
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'navy.700')
    const brandColor = useColorModeValue('brand.500', 'brand.400')
    return (
        <Card>
            <CardHeader>
                <TitleH2>Tasks</TitleH2>
            </CardHeader>
            <CardBody>
                <Box w={'100%'} mt={2}>
                    <Flex mb="20px">
                        <Checkbox me="16px" colorScheme="brandScheme" />
                        <Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
                            Landing Page Design
                        </Text>
                        <Icon ms="auto" as={MdDragIndicator} color="secondaryGray.600" w="24px" h="24px" />
                    </Flex>
                    <Flex mb="20px">
                        <Checkbox me="16px" defaultChecked colorScheme="brandScheme" />
                        <Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
                            Dashboard Builder
                        </Text>
                        <Icon ms="auto" as={MdDragIndicator} color="secondaryGray.600" w="24px" h="24px" />
                    </Flex>
                    <Flex mb="20px">
                        <Checkbox defaultChecked me="16px" colorScheme="brandScheme" />
                        <Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
                            Mobile App Design
                        </Text>
                        <Icon ms="auto" as={MdDragIndicator} color="secondaryGray.600" w="24px" h="24px" />
                    </Flex>
                    <Flex mb="20px">
                        <Checkbox me="16px" colorScheme="brandScheme" />
                        <Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
                            Illustrations
                        </Text>
                        <Icon ms="auto" as={MdDragIndicator} color="secondaryGray.600" w="24px" h="24px" />
                    </Flex>
                    <Flex mb="20px">
                        <Checkbox defaultChecked me="16px" colorScheme="brandScheme" />
                        <Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
                            Promotional LP
                        </Text>
                        <Icon ms="auto" as={MdDragIndicator} color="secondaryGray.600" w="24px" h="24px" />
                    </Flex>
                </Box>
            </CardBody>
        </Card>
    )
}
