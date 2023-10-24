import styles from './Search.module.scss';
import { useContext, useState } from 'react';
import { NavLink, Fo } from 'react-router-dom';
import { motion } from "framer-motion";
import { SearchQuery } from '../../contexts/searchQuery';


const Search = () => {
    
    const [textQuery, setTextQuery] = useState('');

    const { setIsSearchQuery } = useContext(SearchQuery);

    const [validSearch, setValidSearch] = useState(false);

    const textChangeHandler = (e) => {
        setTextQuery(e.target.value);
        if (e.target.value.trim() !== ''){
            setValidSearch(true);
        } else{
            setValidSearch(false);
        }
    }

    const clearHandler = () => {
        setTextQuery('');
        setValidSearch(false);
    }

    const sendSearchRequest = () => {
        setIsSearchQuery(textQuery);
    };

    const activeBtn = validSearch ? styles.valid :  styles.invalid;
    const activeClear = textQuery.length > 0 ? styles['search-clear'] : styles['search-none'];

    return <div className={styles['header-search']}>
        <div className={styles['search-input']}>
            <motion.input
            value={textQuery}
            placeholder='Поиск'
            onChange={textChangeHandler}
            whileFocus={
            { width: '600px',
            fontSize: '16px'}
            } 
            type="text"> 
            </motion.input>
            <button 
            className={activeClear}
            onClick={clearHandler}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon" clipPath="url(#clip0_235_948)">
                <path id="Vector" d="M19 6.415L17.59 5.005L12 10.595L6.41 5.005L5 6.415L10.59 12.005L5 17.595L6.41 19.005L12 13.415L17.59 19.005L19 17.595L13.41 12.005L19 6.415Z" fill="black" fillOpacity="0.87"/>
                </g>
                <defs>
                <clipPath id="clip0_235_948">
                <rect width="24" height="24" fill="white" transform="translate(0 0.00500488)"/>
                </clipPath>
                </defs>
            </svg>
            </button>
    </div>
        <NavLink 
        to='/search' 
        className={activeBtn} 
        onClick={sendSearchRequest}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon" clipPath="url(#clip0_235_943)">
        <path id="Vector" d="M16.1667 14.335H15.3767L15.0967 14.065C16.0767 12.925 16.6667 11.445 16.6667 9.83496C16.6667 6.24496 13.7567 3.33496 10.1667 3.33496C6.57669 3.33496 3.66669 6.24496 3.66669 9.83496C3.66669 13.425 6.57669 16.335 10.1667 16.335C11.7767 16.335 13.2567 15.745 14.3967 14.765L14.6667 15.045V15.835L19.6667 20.825L21.1567 19.335L16.1667 14.335ZM10.1667 14.335C7.67669 14.335 5.66669 12.325 5.66669 9.83496C5.66669 7.34496 7.67669 5.33496 10.1667 5.33496C12.6567 5.33496 14.6667 7.34496 14.6667 9.83496C14.6667 12.325 12.6567 14.335 10.1667 14.335Z" fill="black" fillOpacity="0.87"/>
        </g>
        <defs>
        <clipPath id="clip0_235_943">
        <rect width="24" height="24" fill="white" transform="translate(0.666687 0.334961)"/>
        </clipPath>
        </defs>
        </svg>
        </NavLink>
    </div>
}

export default Search;