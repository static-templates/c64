/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./**/*.{html,js}"],
    theme: {
        darkSelector: '.dark',
        extend: {
            rotate: {
                '-1': '-1deg',
                '-2': '-2deg',
                '-3': '-3deg',
                '1': '1',
                '2': '2deg',
                '3': '3deg',
            },
            height: {
                '1/2': '0.125rem',
                '2/3': '0.1875rem',
            },
            colors: {
                'commodore': {
                    50: '#F2F5FF',
                    100: '#E6EAFF',
                    200: '#C0CBFF',
                    300: '#99ACFF',
                    400: '#4D6DFF',
                    500: '#012FFF',
                    600: '#012AE6',
                    700: '#011C99',
                    800: '#001573',
                    900: '#000E4D',
                },
                'gray': {
                    50: '#fbfdff',
                    100: '#f7fafc',
                    150: '#f1f4f6',
                    200: '#edf2f7',
                    250: '#e8edf2',
                    300: '#e2e8f0',
                    350: '#d2d6dc',
                    400: '#cbd5e0',
                    450: '#bbc5d0',
                    500: '#a0aec0',
                    550: '#8917ab',
                    600: '#718096',
                    650: '#5deaff',
                    700: '#4a5568',
                    750: '#3bc658',
                    800: '#2d3748',
                    850: '#23abba',
                    900: '#1a202c',
                    950: '#0d1016',
                },
            }
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'dark-hover', 'dark-group-hover'],
        backgroundColor: ['hover', 'group-hover', 'dark', 'dark-hover', 'responsive', 'dark-group-hover', 'dark-even', 'dark-odd'],
        textColor: ['group-hover', 'hover', 'dark', 'dark-hover'],
        border: ['group-hover'],
        transform: ['group-hover'],
        translate: ['group-hover'],
        margin: ['hover', 'responsive'],
        typography: ['responsive'],
        display: ['responsive', 'hover', 'focus', 'dark']
    },
    plugins: [],
}
