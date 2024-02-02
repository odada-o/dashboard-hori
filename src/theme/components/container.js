import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define the base component styles
const baseStyle = {
    borderRadius: 'xl', // add a border radius
    fontWeight: 'medium', // change the font weight
    maxW: 'container.lg', // set the max width
}

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle })
