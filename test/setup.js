import 'css-modules-require-hook';
import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

Object.keys(window).forEach((key) => {
  if(!window.hasOwnProperty(key)) return;
  if(key in global) return;
  global[key] = window[key];
});
