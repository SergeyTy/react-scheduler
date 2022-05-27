// src/components/Root/index.js
import React from 'react'
import App from '../../App'
import { ThemeContext, themes } from '../../Context/ThemeContext'
import Toggle from '../Toggle'

const Root = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
		<div>
		<App/>
		<Toggle
			onChange={() => {
				if (theme === themes.light) setTheme(themes.dark)
				if (theme === themes.dark) setTheme(themes.light)
			}}
			value={theme === themes.dark}
		/>
		</div>
    )}
  </ThemeContext.Consumer>
)

export default Root