import React,{ Component } from 'react'
import { Menu as DocsMenu } from 'docz'
import withSizes from 'react-sizes'
import styled from '@emotion/styled'
import match from 'match-sorter'
import flattendepth from 'lodash.flattendepth'
import { styler,getColor ,media,getThemeP} from '@styles/system'
import { breakpoints } from '@styles/responsive'
import { Logo } from '../Logo'
import { Search } from '../Search'
import { Menu } from './Menu'
import { Docz } from './Docz'
import { Rosey } from './Rosey'
import { Hamburguer } from './Hamburguer'


const sidebarBg = getColor('sidebarBg')
const sidebarText = getColor('sidebarText')
const sidebarBorder = getColor('sidebarText')


const Wrapper = styled('div')(styler({
  width: '280px',
  minWidth: '280px',
  minHeight: '100vh',
  background: sidebarBg,
  transition: 'transform 0.2s, background 0.3s',
  zIndex: '100',
  position: ['relative', 'absolute', 'absolute', 'relative'],
  ...getThemeP('styles.sidebar'),
  '& dl': {
    padding: '0',
    margin: '0 16px'
  },
  '& dl a': {
    fontWeight: '400'
  },
  ...media.desktop({
    transform: {
      opened:'translateX(-100%)',
      default:'translateX(0)'
    } }, v => ({ max: v - 1 }))
  
}))

// const position = (p) => p.theme.docz.mq({
//   position: ['absolute', 'absolute', 'absolute', 'relative'],
// })
// // Wrapper.displayName='SideBarWrap'
// const Wrapper = styled('div') `
//   position: relative;
//   width: 280px;
//   min-width: 280px;
//   min-height: 100vh;
//   background: ${sidebarBg};
//   transition: transform 0.2s, background 0.3s;
//   z-index: 100;
//   ${position};
//   ${get('styles.sidebar')};

//   dl {
//     padding: 0;
//     margin: 0 16px;
//   }

//   dl a {
//     font-weight: 400;
//   }

//   @media screen and (max-width: ${breakpoints.desktop - 1}px) {
//     transform: translateX(${(p) => (p.opened ? '-100%' : '0')});
//   }
// `
const Content =styled('div')({
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  width: '280px',
  minWidth: '280px',
  height: '100%',
  maxHeight: '100vh'
})

// const Content = styled('div') `
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   width: 280px;
//   min-width: 280px;
//   height: 100%;
//   max-height: 100vh;
// `
const Menus =styled('nav')({
  flex: '1',
  overflowY: 'auto',
  marginBottom: '10px'
})


// const Menus = styled('nav') `
//   flex: 1;
//   overflow-y: auto;
//   margin-bottom: 10px;
// `

const Empty=styled('div')(styler({
  flex: 1,
  opacity: .7,
  padding: '0 24px',
  color:sidebarText
}))

// const Empty = styled('div') `
//   flex: 1;
//   opacity: 0.7;
//   padding: 0 24px;
//   color: ${sidebarText};
// `
const Footer =styled('div')(styler({
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  color:sidebarText,
  borderWidth:0,
  borderStyle:'dashed',
  borderColor:sidebarBorder
}))

// const Footer = styled('div') `
//   padding: 10px 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   color: ${sidebarText};
//   border-top: 1px dashed ${sidebarBorder};
// `
const FooterLink =styled('a')({
  padding: 0,
  margin: 0,
  marginLeft: '5px'
})

// const FooterLink = styled('a') `
//   padding: 0;
//   margin: 0;
//   margin-left: 5px;
// `


const FooterLogo = styled(Docz) `
  fill: ${sidebarText};
`

const FooterLogo2 = styled(Rosey) `
  fill: ${sidebarText};
`

const ToggleBackground =styled('div')(styler({
  display:{
    opened:'none',
    default:'block'
  },
  content: "''",
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  width: '100vw',
  height: '100vh',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  cursor: 'pointer',
  zIndex: '99'
}))

// const ToggleBackground = styled('div') `

//   display: ${(p) => (p.opened ? 'none' : 'block')};

//   content: '';
//   position: fixed;
//   background-color: rgba(0, 0, 0, 0.4);
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   cursor: pointer;
//   z-index: 99;
// `
class SidebarBase extends Component {
  
 state = {
   lastVal: '',
   menus: null,
   searching: false,
   showing: true,
 }

 componentDidUpdate (pProps, pState) {
   if (pState.showing !== this.state.showing) {
     this.addOverlayClass()
   }
 }

 componentDidMount () {
   this.addOverlayClass()
 }

 render () {
   const { showing } = this.state
   return (<DocsMenu>
     {initial => {
       const menus = this.state.menus || initial
       return (<React.Fragment>
         <Wrapper opened={showing}>
           <Content>
             <Hamburguer opened={!showing} onClick={this.handleSidebarToggle}/>
             <Logo showBg={!showing} />
         
             <Search onSearch={this.handleSearchDocs(initial, menus)}/>

             {menus.length === 0 ? (<Empty>No documents found.</Empty>) : (<Menus>
               {menus.map(menu => (<Menu key={menu.id} item={menu} sidebarToggle={this.handleSidebarToggle} collapseAll={Boolean(this.state.searching)}/>))}
             </Menus>)}
             <Footer>
               <div>
                 <FooterLink href="https://rosenstein.io" target="_blank">
                   <FooterLogo2 width={100}/>
                 </FooterLink>

                 
                 {/* <button onClick={this.props.theme.docz.toggler}>Toggle</button> */}
                 {/* <span>Powered By:</span> <FooterLink href="https://docz.site" target="_blank">
                   <FooterLogo width={40}/>
                 </FooterLink> */}
       

               </div>
             </Footer> 
           </Content>
         </Wrapper>
         <ToggleBackground opened={showing} onClick={this.handleSidebarToggle}/>
       </React.Fragment>)
     }}
   </DocsMenu>)
 }

   addOverlayClass = () => {
     const { isDesktop } = this.props
     const { showing } = this.state

     if (window && typeof window !== 'undefined' && !isDesktop) {
       if(showing){
         document.documentElement.classList.remove('with-overlay')
       }else{
         document.documentElement.classList.add('with-overlay')
       }
    
       // showing?document.documentElement.classList.remove('with-overlay'): document.documentElement.classList.add('with-overlay')
     

     }
   }

   match = (val, menu) => {
     const items = menu.map(item => [item].concat(item.menu || []))
     const flattened = flattendepth(items, 2)

     return match(flattened, val, { keys: ['name'] })
   }

   search = (initial, menus, val) => {
     const change = !val.startsWith(this.state.lastVal)

     this.setState({ lastVal: val })
     return this.match(val, change ? initial : menus)
   }

   handleSearchDocs = (initial, menus) => val => {
     const isEmpty = val.length === 0

     this.setState({
       menus: isEmpty ? initial : this.search(initial, menus, val),
       searching: !isEmpty,
     })
   }

   handleSidebarToggle = () => {
     if (this.props.isDesktop) return
     this.setState({ showing: !this.state.showing })
   }

}

const mapSizesToProps = ({ width }) => ({
  isDesktop: width >= breakpoints.desktop,
})
export const Sidebar = withSizes(mapSizesToProps)(SidebarBase)
