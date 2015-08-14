import renderStyles from '../utilities/renderStyles';

let reloadQueued = false;

function queueReload() {
  if(reloadQueued) return;
  reloadQueued = true;
  setTimeout(() => {
    reloadQueued = false;
    renderStyles();
  }, 0);
}

export default function hotReloadStyles(target, name, descriptor) {

  if(name !== 'render') throw Error('HotReloadStyles must be applied to render()');

  const originalRender = descriptor.value;

  descriptor.value = function render() {

    if (process.env !== 'production') {
      queueReload();
    }

    return originalRender.apply(this, arguments);
  }
}
