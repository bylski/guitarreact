
import styles from './inputFormsStyles/inputForms.module.scss'
import { useContext, useState, useRef } from 'react';
import CartContext from '../../store/cart-data';

const ProductSearcher = (props) => {

    const cartCtx = useContext(CartContext);

    const [searchQuery, setSearchQuery] = useState('')
    const inputChangeHandler = (event) => {
        const query = event.target.value 
        setSearchQuery(query);
    }

    const searchFormElement = useRef();
    const searchFormHandler = (event) => {
        event.preventDefault();
        cartCtx.onSearchQuery(searchQuery);
        setSearchQuery('');
        searchFormElement.current.blur();
    }

    return(
        <form onSubmit={searchFormHandler} className={styles.searchForm}>
            <input ref={searchFormElement} onChange={inputChangeHandler} className={styles.searchInput} type="text" value={searchQuery} placeholder="Search For Product..."></input>
        </form>
    )
}

export default ProductSearcher;