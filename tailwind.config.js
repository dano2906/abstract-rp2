/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'gtab':['GT-America-Standard-Bold-Trial','system-ui'],
        'gtam':['GT-America-Standard-Medium-Trial','system-ui']
      },
      colors: {
        'med-blue':"#4C5FD5",
        'light-blue':'#dadbf1'
      }
    },
  },
  plugins: [],
}

