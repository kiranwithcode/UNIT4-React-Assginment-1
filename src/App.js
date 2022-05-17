
import './App.css';
import Hello from './component/Hello';

import NavbarLogo from './component/NavbarLogo';
import NavbarLinks from './component/NavbarLinks';
import NavbarButton from './component/NavbarButton';


function App() {

var info=[
 { title:"Services"},
 {title:"Projects"},
 {title:"About"}

]
  return (
 
    <>

<div className='container'>
<NavbarLogo></NavbarLogo>
{/* <NavbarLinks></NavbarLinks> */}
{
  info.map((user)=>(
    <div key={user.name}>
      <NavbarLinks{...user}/>
      </div>
  )
    
  )
}
<NavbarButton></NavbarButton>
</div>
  <Hello></Hello>
       </>
  )
  
}

export default App;
 /* /* <div className={`${styles.container}`}> */ 