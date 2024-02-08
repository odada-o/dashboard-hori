import { mode } from '@chakra-ui/theme-tools'
import { lighten } from 'polished'

export const variablesC = {
    $maxW: '1280px',
}

export const globalStyles = {
    colors: {
        primay: '#422AFB',
        pirmaryLight: lighten(0.1, '#422AFB'),
        secondary: '#83D9FB',
        secondaryLight: lighten(0.1, '#83D9FB'),
        tertiary: '#22C55F',
        tertiaryLight: lighten(0.1, '#22C55F'),

        bgDefault: '#F5F7FF',

        white: '#FFF',
        black: '#000',

        gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
    },
    styles: {
        global: (props) => ({
            body: {
                minW: '330px',
                // overflowX: 'hidden',
                // bg: mode('bgDefault', 'navy.900')(props),
                fontFamily: '"Noto Sans KR", "sans-serif"',
                letterSpacing: '-0.5px',
                fontSize: '16px',
                lineHeight: '1.5',
                color: mode('gray.900', 'white')(props),
                bg: 'url("/bg-/pc.png") no-repeat 0 0 / 1790px auto',
            },
            '#root': {
                opacity: 0.7,
            },
            input: {
                color: 'gray.700',
            },
            html: {
                fontFamily: '"Noto Sans KR", "sans-serif"',
            },
            'ul > li': {
                listStyle: 'none',
            },
            '.chakra-container': {
                maxWidth: 'calc(1280px + var(--chakra-space-4) * 2) !important',
            },
        }),
    },
}
