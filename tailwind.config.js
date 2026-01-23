/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'case-study-overlay': 'rgba(32, 156, 216, 0.25)',
        'benefits-overlay': 'rgba(32,156,216,0.1)',
      }
    },
  },
  plugins: [
    forms,
    typography,
  ],
}

