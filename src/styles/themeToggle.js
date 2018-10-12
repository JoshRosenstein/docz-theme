import React from 'react'

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
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme, mode }) => (
        <button onClick={toggleTheme}>Toggle {mode}</button>
      )}
    </ThemeContext.Consumer>
  )
}