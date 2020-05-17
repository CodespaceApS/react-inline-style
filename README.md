# react-lazy-style

react-lazy-style is a react native style library to speed up the development.

In the example i'm calling my div for View, You dont have to do this. You can make a Div component instend.

## Installation

Install with npm
```bash
npm install react-lazy-style
```

Install with yarn
```bash
yarn add react-lazy-style
```


## Usage
Create a style.js file

#### style.js
```
import React from 'react'
import initInline from 'react-lazy-style'
const inline = initInline({})

export const colors = {
  // add your style colors here if you want.
}

export const Text = ({ children, ...props }) => (
  <p {...inline(props)}>
    {children || null}
  </p>
)
export const View = ({ children, ...props }) => (
  <div {...inline(props)}>
    {children || null}
  </div>
)
export const Image = ({ children, ...props }) => (
  <img {...inline(props)} />
)

export const Span = ({ children, ...props }) => (
  <span {...inline(props)}>
    {children || null}
  </span>
)
export const Button = ({ children, ...props }) => (
  <button {...inline(props)}>
    {children || null}
  </button>
)
```
#### Example component
```
import React from 'react'
import { View, Text } from './style'

export default (onClick = () => console.log('no touch handler')) => (
    <View pointer onClick={onClick} s="bg:green|w:100|h:50|centerCenter|shadow:1">
      <Text>Green button</Text>
    </View>
)
```

# Two ways
## "s" prop
Its work by splitting a string by (|) and the args by (:).
ex: w:400|h:200  = { width: 400, height: 200 }
```
<View s="w:400|h:200" >
</View>
```
use template string to add variables.
```
<View s={`w:400|h:${height}`} >
</View>
```
## styling props
Works by adding the props to the component, not all props needs an arg, example the row prop.
```
<View w="200" row h="200">
</View>
```

# Extending
In your style.js file you can extend the style functions.

In the example we are adding the style prop green.
```
import initInline from 'react-lazy-style'

const inline = initInline({
  'green': _ => ['backgroundColor', 'green']
})
```
In the example we are adding a multi style prop dp(default padding).
```
import initInline from 'react-lazy-style'

const inline = initInline({
  'dp': _ => [
    ['paddingLeft', 10],
    ['paddingRight', 10]
  ]
})
```

## Contributing
Fell free to add a pull request to add more prestyle props.

[read all the style props here.](https://github.com/CodespaceApS/react-lazy-style/blob/master/styles.js)

## License
[MIT](https://choosealicense.com/licenses/mit/)