/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Merriweather', 'serif'],
        ui: ['Inter', 'sans-serif']
      },
      colors: {
        garden: {
          primary: '#2D3A3A',
          secondary: '#4A5568',
          accent: '#006400',
          background: '#F7F7F2',
          surface: '#FFFFFF',
          'dark-primary': '#E1E1E1',
          'dark-secondary': '#A1A1A1',
          'dark-accent': '#90EE90',
          'dark-background': '#1A1A1A',
          'dark-surface': '#2D2D2D'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#2D3A3A',
            fontFamily: 'Merriweather, serif',
            h1: {
              fontFamily: 'Inter, sans-serif',
              color: '#2D3A3A',
            },
            h2: {
              fontFamily: 'Inter, sans-serif',
              color: '#2D3A3A',
            },
            h3: {
              fontFamily: 'Inter, sans-serif',
              color: '#2D3A3A',
            },
            h4: {
              fontFamily: 'Inter, sans-serif',
              color: '#2D3A3A',
            },
            h5: {
              fontFamily: 'Inter, sans-serif',
              color: '#2D3A3A',
            },
            h6: {
              fontFamily: 'Inter, sans-serif',
              color: '#2D3A3A',
            },
            strong: {
              color: '#2D3A3A',
            },
            a: {
              color: '#006400',
              '&:hover': {
                color: '#5C6B73',
              },
            },
            blockquote: {
              color: '#5C6B73',
              borderLeftColor: '#006400',
            },
            code: {
              color: '#2D3A3A',
            },
            pre: {
              backgroundColor: '#F7F7F2',
              color: '#2D3A3A',
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontFamily: 'Inter, sans-serif',
            },
            h2: {
              fontFamily: 'Inter, sans-serif',
            },
            h3: {
              fontFamily: 'Inter, sans-serif',
            },
            h4: {
              fontFamily: 'Inter, sans-serif',
            },
            h5: {
              fontFamily: 'Inter, sans-serif',
            },
            h6: {
              fontFamily: 'Inter, sans-serif',
            },
          },
        },
        dark: {
          css: {
            color: '#E1E1E1',
            a: {
              color: '#90EE90',
              '&:hover': {
                color: '#A1A1A1',
              },
            },
            h1: {
              color: '#E1E1E1',
              fontFamily: 'Inter, sans-serif',
            },
            h2: {
              color: '#E1E1E1',
              fontFamily: 'Inter, sans-serif',
            },
            h3: {
              color: '#E1E1E1',
              fontFamily: 'Inter, sans-serif',
            },
            h4: {
              color: '#E1E1E1',
              fontFamily: 'Inter, sans-serif',
            },
            h5: {
              color: '#E1E1E1',
              fontFamily: 'Inter, sans-serif',
            },
            h6: {
              color: '#E1E1E1',
              fontFamily: 'Inter, sans-serif',
            },
            strong: {
              color: '#E1E1E1',
            },
            code: {
              color: '#E1E1E1',
              backgroundColor: '#2D2D2D',
            },
            pre: {
              backgroundColor: '#2D2D2D',
              color: '#E1E1E1',
            },
            blockquote: {
              color: '#A1A1A1',
              borderLeftColor: '#90EE90',
            },
            ul: {
              color: '#E1E1E1',
            },
            ol: {
              color: '#E1E1E1',
            },
            p: {
              color: '#E1E1E1',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}