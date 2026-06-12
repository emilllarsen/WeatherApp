import styles from './Navbar.module.css';
import searchIcon from '../../assets/search.svg';
import cancelIcon from '../../assets/close.svg';
import moonIcon from '../../assets/moon.svg';
import sunIcon from '../../assets/sun.svg';
import { useState } from 'react'; 

export const Navbar = () => {
    const [ viewInput, setViewInput ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const handleOpenSearch = () => {
        setViewInput(true);
    }
    const handleCloseSearch = () => {
        setViewInput(false);
    }
    

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                {viewInput && (
                    <input className={styles.inputBar} type="text" placeholder='Search city or country' />
                )}
                <button className={styles.themeToggle}><img src={moonIcon} alt="" /></button>
                {viewInput ? <button onClick={handleCloseSearch} type='button' className={styles.search}><img src={cancelIcon} alt="" /></button>  : <button onClick={handleOpenSearch} type='button' className={styles.search}><img src={searchIcon} alt="" /></button> }                
            </nav>
        </header>
        
    )
}