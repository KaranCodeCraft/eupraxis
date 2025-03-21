/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      // Default Tailwind colors
      white: '#ffffff',
      black: '#000000',
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
      red: {
        50: '#FEE2E2',
        100: '#FECACA',
        200: '#FCA5A5',
        300: '#F87171',
        400: '#EF4444',
        500: '#DC2626',
        600: '#B91C1C',
        700: '#991B1B',
        800: '#7F1D1D',
        900: '#6B1D1D',
      },
      yellow: {
        50: '#FEF3C7',
        100: '#FDE68A',
        200: '#FCD34D',
        300: '#FBBF24',
        400: '#F59E0B',
        500: '#D97706',
        600: '#B45309',
        700: '#92400E',
        800: '#78350F',
        900: '#6B2D0C',
      },
      green: {
        50: '#D1FAE5',
        100: '#A7F3D0',
        200: '#6EE7B7',
        300: '#34D399',
        400: '#10B981',
        500: '#059669',
        600: '#047857',
        700: '#065F46',
        800: '#064E36',
        900: '#06423C',
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      indigo: {
        50: '#EEF2FF',
        100: '#E0E7FF',
        200: '#C7D2FE',
        300: '#A5B4FC',
        400: '#818CF8',
        500: '#6366F1',
        600: '#4F46E5',
        700: '#4338CA',
        800: '#3730A3',
        900: '#312E81',
      },
      purple: {
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#D8B4FE',
        300: '#C084FC',
        400: '#A855F7',
        500: '#9333EA',
        600: '#7E22CE',
        700: '#6B21A8',
        800: '#581C87',
        900: '#4C1D6E',
      },
      pink: {
        50: '#FCE7F3',
        100: '#FBCFE8',
        200: '#F9A8D4',
        300: '#F472B6',
        400: '#EC4899',
        500: '#DB2777',
        600: '#BE185D',
        700: '#9D174D',
        800: '#831843',
        900: '#6A0D37',
      },
      orange: {
        50: '#FFEDD5',
        100: '#FED7AA',
        200: '#FD8B3E',
        300: '#FB5E23',
        400: '#F97316',
        500: '#F97316',  
        600: '#EA580C',
        700: '#C2410C',
        800: '#9A3400',
        900: '#7C2D12',
      },


      // Custom Colors
      'Blueviolet': '#6556FF',
      'semiblueviolet': 'rgba(101, 86, 255, 0.15)',
      'midnightblue': '#222C44',
      'kellygreen': "#43C639",
      'charcoal': "#2D2F30",
      'cornflowerblue': "#699BF7",
      'paleblue': '#D5EFFA',
      'ultramarine': '#1A21BC',
      'slategray': '#57595F',
      'lightkblue': '#F6FAFF',
      'grey500': '#ECECEC',
      'red': '#B40000',
      'gold': '#FFB900',
      'darkgray': 'rgba(54, 54, 54, 0.75)',
      'darkbrown': '#352E2E',
      'lightgray': '#A3A7AD',
      'gunmetalgray': '#363636',
      'gray-blue': 'rgba(105, 120, 131, 0.16)',
      'dark-red': 'rgba(44, 9, 11, 0.8)',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '55xl': ['55px', { lineHeight: '1' }],
      '22xl': ['22px', { lineHeight: '1' }],
    },
    extend: {},
  },
  plugins: [],
}
