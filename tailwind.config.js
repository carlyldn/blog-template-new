/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '16/9',
        'square': '1/1',
      },
    },
  },
  plugins: [],
}
