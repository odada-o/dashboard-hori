import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Icon, Text } from '@chakra-ui/react'
import { TitleH2 } from '../common/Title'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../../assets/css/MiniCalendar.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MiniCalendar = () => {
    const [value, onChange] = useState(new Date())
    return (
        <Card>
            <CardHeader>
                <TitleH2>Mini Calendar</TitleH2>
            </CardHeader>
            <CardBody>
                <Calendar
                    onChange={onChange}
                    value={value}
                    tileContent={<Text color="brand.500"></Text>}
                    prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
                    nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
                />
            </CardBody>
        </Card>
    )
}

export default MiniCalendar
