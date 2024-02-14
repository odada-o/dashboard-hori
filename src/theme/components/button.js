import { mode } from '@chakra-ui/theme-tools'
export const buttonStyles = {
    components: {
        Button: {
            baseStyle: {
                borderRadius: '0',
                boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
                transition: '.25s all ease',
                boxSizing: 'border-box',
                _focus: {
                    boxShadow: 'none',
                },
                _active: {
                    boxShadow: 'none',
                },
            },
            variants: {
                icon: () => ({
                    w: '45px',
                    h: '45px',
                    minW: 'none',
                    bg: 'transparent',
                    color: 'gray.500',
                    borderRadius: '50%',
                    _focus: {
                        bg: 'gray.100',
                    },
                    _active: {
                        bg: 'gray.100',
                    },
                    _hover: {
                        bg: 'gray.100',
                    },
                }),
                link12: () => ({
                    height: '32px',
                    fontSize: '12px',
                    color: 'white',
                    'padding-inline-start': '0',
                    'padding-inline-end': '0',
                }),
                outline: () => ({
                    borderRadius: '0',
                    bg: ['red', 'brand.200', 'brand.900', 'white'],
                    // color: ['white', null, null, 'brand.500'],
                    color: { base: 'white', lg: 'brand.500' },
                }),
                brand: (props) => ({
                    bg: mode('brand.500', 'brand.400')(props),
                    color: 'yellow.500',
                    _focus: {
                        bg: mode('brand.500', 'brand.400')(props),
                    },
                    _active: {
                        bg: mode('brand.500', 'brand.400')(props),
                    },
                    _hover: {
                        bg: mode('brand.600', 'brand.400')(props),
                    },
                }),
                darkBrand: (props) => ({
                    bg: mode('brand.900', 'brand.400')(props),
                    // color: 'white',
                    color: 'yellow.500',
                    _focus: {
                        bg: mode('brand.900', 'brand.400')(props),
                    },
                    _active: {
                        bg: mode('brand.900', 'brand.400')(props),
                    },
                    _hover: {
                        bg: mode('brand.800', 'brand.400')(props),
                    },
                }),
                lightBrand: (props) => ({
                    bg: mode('#F2EFFF', 'whiteAlpha.100')(props),
                    color: mode('brand.500', 'white')(props),
                    _focus: {
                        bg: mode('#F2EFFF', 'whiteAlpha.100')(props),
                    },
                    _active: {
                        bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
                    },
                    _hover: {
                        bg: mode('secondaryGray.400', 'whiteAlpha.200')(props),
                    },
                }),
                light: (props) => ({
                    bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
                    color: mode('secondaryGray.900', 'white')(props),
                    _focus: {
                        bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
                    },
                    _active: {
                        bg: mode('secondaryGray.300', 'whiteAlpha.100')(props),
                    },
                    _hover: {
                        bg: mode('secondaryGray.400', 'whiteAlpha.200')(props),
                    },
                }),
                action: (props) => ({
                    fontWeight: '500',
                    borderRadius: '50px',
                    bg: mode('secondaryGray.300', 'brand.400')(props),
                    color: mode('brand.500', 'white')(props),
                    _focus: {
                        bg: mode('secondaryGray.300', 'brand.400')(props),
                    },
                    _active: { bg: mode('secondaryGray.300', 'brand.400')(props) },
                    _hover: {
                        bg: mode('secondaryGray.200', 'brand.400')(props),
                    },
                }),
                setup: (props) => ({
                    fontWeight: '500',
                    borderRadius: '50px',
                    bg: mode('transparent', 'brand.400')(props),
                    border: mode('1px solid', '0px solid')(props),
                    borderColor: mode('secondaryGray.400', 'transparent')(props),
                    color: mode('secondaryGray.900', 'white')(props),
                    _focus: {
                        bg: mode('transparent', 'brand.400')(props),
                    },
                    _active: { bg: mode('transparent', 'brand.400')(props) },
                    _hover: {
                        bg: mode('secondaryGray.100', 'brand.400')(props),
                    },
                }),
            },
        },
    },
}
