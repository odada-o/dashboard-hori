import { mode } from '@chakra-ui/theme-tools'
export const tableStyles = {
    components: {
        Table: {
            baseStyle: {
                thead: {
                    th: {
                        fontSize: '12px',
                        color: '#a0aec0',
                    },
                },
                tbody: {
                    tr: {
                        _hover: {
                            bg: mode('gray.100', 'gray.600'),
                        },
                    },
                },
            },
        },
    },
}
