import React from 'react'

const DEFAULT_THEME = 'light'
export const ThemeContext = React.createContext()


export class ModeProvider extends React.Component {
  toggleTheme = e => {
    e.preventDefault()
    this.setState({
      mode: this.state.mode === 'light' ? 'dark' : 'light'
    })
  }
  setTheme = e =>m=> {
    e.preventDefault()
    this.setState({
      mode: m
    })
  }
  state = {
    mode: null,
    toggleTheme: this.toggleTheme,
    setTheme:this.setTheme
  };

  render () {

    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children({...this.state})}
      </ThemeContext.Provider>
    )
  }
}

 
export function ThemeToggleButton (){
  // Theme Toggler Button 不仅从 context 接收 them 也接收 toggleTheme 函数。
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme, mode }) => (
        <button onClick={toggleTheme}>Toggle {mode}</button>
      )}
    </ThemeContext.Consumer>
  )
}