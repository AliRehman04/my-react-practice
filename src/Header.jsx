 import React from 'react'
function NewHeader() { 
return(
    <h1>new header component</h1>
)
 }
 export {NewHeader};


 
 function Nav() {
   return (
     <div>
     <ul><li style={{listStyle:"none"}}><a href='#' style={{textDecoration:"none",color:"#fff"}}>Home</a></li></ul>
     </div>
   )
 }
 
 export default Nav;
 