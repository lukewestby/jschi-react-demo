import StyleSheet from 'stilr';
import autoprefixer from 'autoprefixer-core';
import postcss from 'postcss';

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);

export default function renderStyles() {
  const prefixedCss = postcss(autoprefixer()).process(StyleSheet.render()).css;
  styleSheet.textContent = prefixedCss;
}
