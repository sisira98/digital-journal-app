/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        FONT_BLUE: '#301DAD',
        SEARCH_BLUE:'#5A4282',
        RED: '#FF0000',
      },
      fontSize: {
        LARGER: '30px',
        LARGE: '25px',
        MEDIUM: '20px',
        NORMAL: '16px',
        SMALL: '14px',
        TINY:'12px',
      },
      fontWeight: {
        EXTRABOLD: '800',
        BOLD: '700',
        SEMIBOLD: '600',
        MEDIUM: '400',
        SMALL: '300',
      },
      fontFamily: {
        OPENSANS: 'Open Sans',
        sacramento: ['Sacramento', 'cursive'],
      },
      customClasses: {
        'custom-title': 'w-[172px] h-[37px] flex',
      },
      boxShadow: {
        'header_custom': '0px 5px 4px 0px #00000014',
        'search-custom': ' 0px 1px 4px 1px #0000000F',
        'search-custom-one': '1px 1px 4px 0px #0000001F',
        'item-custom': '3px 4px 4px 2px #0000000F',
        'entry_custom':'5px 4px 10px 4px #0000000F',
        'main_entry_custom':'4px 4px 10px 6px #0000000D',

      },
    },
    plugins: [],
  }
};
