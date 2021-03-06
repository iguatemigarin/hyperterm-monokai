'use strict';
const backgroundColor = '#282828';
const foregroundColor = '#F8F8F0';

const colors = [
  backgroundColor,
  '#F92672', // pink
  '#229b64', // green
  '#FD971F', // orange
  '#E0E0F0', // cold white-ish
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  '#49483E', // brown gray
  '#F92672', // pink
  '#229b64', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  foregroundColor
];

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    shell: 'C:\\Windows\\System32\\wsl.exe',
    shellArgs: [],
    backgroundColor,
    foregroundColor,
    cursorColor: 'rgba(248, 248, 240, 0.5)',
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
      .tab_active:before {
        border-bottom-color: #E6DB74 !important;
      }
    `
  })
);
