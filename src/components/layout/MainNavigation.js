import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import {useContext} from 'react';
import FavoritesContext from '../../store/Favorites-context';

function MainNavigation(){
const favoritesCtx = useContext(FavoritesContext);

 return(
     <header className={classes.header}>
         <div className={classes.logo}>React Meetups</div>
         <ul>
             <li>
            <Link to='/'>All Meetups</Link>
             </li>
             <li>
            <Link to='/favorites'>My Favorites
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
             </li>
             <li>
            <Link to='/newmeetup'>Add New Meetup</Link>
             </li>
         </ul>
     </header>
 );   
}

export default MainNavigation;