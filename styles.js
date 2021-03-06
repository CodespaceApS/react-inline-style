const secureExtension = (_x) => {
  if (!_x) return null
  const x = _x.toString()

  const extensions = [
    'px', 'rem', '%',
  ]
  if (extensions.filter((y) => x.indexOf(y) > -1).length > -1) {
    return x
  }
  return x + 'px'
}

module.exports = {
  fill: (x) => [
    ['position', 'absolute'],
    ['zIndex', 100],
    ['top', 0],
    ['right', 0],
    ['bottom', 0],
    ['left', 0],
  ],
  reset: (x) => [
    ['margin', 0],
    ['padding', 0],
    ['outline', 0],
  ],
  flex: (x) => ['flex', x || '1'],
  display: (x) => ['display', x || 'flex'],
  block: (x) => ['display', 'block'],
  cursor: (x) => ['cursor', x || `pointer`],
  pointer: (x) => ['cursor', x || `pointer`],
  userSelect: (x) => ['userSelect', 'none'],
  borderBottom: (x) => ['borderBottom', x],
  bg: (x) => ['background', x || 'green'],
  txt: (x) => ['text-align', x],
  bgSize: (x) => ['backgroundSize', x || 'cover'],
  wrap: () => ['flexWrap', 'wrap'],
  img: (url) => [
    ['backgroundImage', `url(${url})`],
    ['backgroundSize', 'cover'],
    ['backgroundPosition', 'center center'],
    ['backgroundRepeat', 'no-repeat'],
  ],
  br: (x) => ['borderRadius', secureExtension(x) || '3px'],
  mb: (x) => ['marginBottom', secureExtension(x) || '10px'],
  mt: (x) => ['marginTop', secureExtension(x) || '10px'],
  ml: (x) => ['marginLeft', secureExtension(x) || '10px'],
  mr: (x) => ['marginRight', secureExtension(x) || '10px'],
  mw: (x) => ['maxWidth', secureExtension(x) || '1600px'],
  _margin: (x) => ['margin', secureExtension(x) || '0px'],
  _padding: (x) => ['padding', secureExtension(x) || '10px'],
  bs: (x) => ['boxShadow', x || 'var(--p-card-shadow,0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 #3f3f4426)'],
  direction: (x) => ['flexDirection', x || 'column'],
  color: (x) => ['color', x],
  column: (x) => ['flexDirection', 'column'],
  row: (x) => ['flexDirection', 'row'],
  height: (x) => ['height', secureExtension(x) || '10px'],
  h: (x) => ['height', secureExtension(x) || '10px'],
  width: (x) => ['width', secureExtension(x) || '10px'],
  w: (x) => ['width', secureExtension(x) || '10px'],
  alignItems: (x) => ['alignItems', 'center'],
  items: (x) => ['alignItems', 'center'],
  end: () => ['justifyContent', 'flex-end'],
  between: () => ['justifyContent', 'space-between'],
  around: () => ['justifyContent', 'space-around'],
  centerCenter: (x) => [['justifyContent', 'center'], ['alignItems', 'center']],
  startCenter: (x) => [['justifyContent', 'flex-start'], ['alignItems', 'center']],
  startStart: (x) => [['justifyContent', 'flex-start'], ['alignItems', 'flex-start']],
  pb: (x) => ['paddingBottom', secureExtension(x) || '10px'],
  pt: (x) => ['paddingTop', secureExtension(x) || '10px'],
  pl: (x) => ['paddingLeft', secureExtension(x) || '10px'],
  pr: (x) => ['paddingRight', secureExtension(x) || '10px'],
  fs: (x) => ['fontSize', secureExtension(x) || '14px'],
  outline: (x) => ['outline', x || 0],
  lh: (x) => ['lineHeight', secureExtension(x) || '20px'],
  border: (x) => ['border', x || '2px solid red'],
  relative: (x) => ['position', 'relative'],
  absolute: (x) => ['position', 'absolute'],
  bottom: (x) => ['bottom', secureExtension(x) || '10px'],
  top: (x) => ['top', secureExtension(x) || '10px'],
  left: (x) => ['left', secureExtension(x) || '10px'],
  right: (x) => ['right', secureExtension(x) || '10px'],
  opacity: (x) => ['opacity', x],
  fw: (x) => ['fontWeight', x],
  bb: (x) => ['borderBottom', x],
}