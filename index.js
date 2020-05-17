const preStyles = require('./styles')

module.exports = (customStyles = {}) => {
  const styles = {
    ...preStyles,
    ...customStyles
  }

  return (allProps) => {
    const { s, ...componentProps } = allProps
    const concatProps = (x, y) => ({ ...x, ...y })

    let inlineProps = {}
    if (s) {
      inlineProps = s
        .split('|')
        .map((x) => x.trim())
        .map((x) => x.split(':').filter((x) => x))
        .reduce((acc, x) => {
          if (x.length > 1) {
            acc[x[0]] = x[1]
          } else {
            acc[x[0]] = true
          }
          return acc
        }, {})
    }
    const props = concatProps(componentProps, inlineProps)
    const resultProps = Object.keys(props)
      .reduce((acc, x) => {
        if (styles[x]) {
          const styleArg = props[x] === true ? null : props[x]
          const [styleKey, value] = styles[x](styleArg)
          if (Array.isArray(styleKey)) {
            styles[x](styleArg).forEach((x) => {
              const [subStyleKey, subValue] = x
              acc.style[subStyleKey] = subValue
            })
          } else {
            acc.style[styleKey] = value
          }
        } else {
          acc[x] = props[x]
        }
        return acc
      }, {
        style: {
          'display': 'flex', 'boxSizing': 'border-box'
        }
      })
    return resultProps
  }

}