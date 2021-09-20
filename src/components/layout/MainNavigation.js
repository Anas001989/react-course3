import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation(){
 return(
     <header className={classes.header}>
         <div className={classes.logo}>React Meetups</div>
         <ul>
             <li>
            <Link to='/'>All Meetups</Link>
             </li>
             <li>
            <Link to='/favorites'>My Favorites</Link>
             </li>
             <li>
            <Link to='/newmeetup'>Add New Meetup</Link>
             </li>
         </ul>
     </header>
 );   
}

export default MainNavigation;