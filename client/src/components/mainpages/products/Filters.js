
   
import React, {useContext} from 'react'
import {globalState} from '../../../globalState'
import Find from '../../headers/icon/magnifying-glass-solid.svg'
import Sort from '../../headers/icon/angle-down-solid.svg'

function Filters() {
    const state = useContext(globalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            
            

            
           
            <div className="row sort">
                
                    
            <div className="row">
            <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
            </div>
            <div className="input-text">
                
                <input type="text" value={search} placeholder="Search products"
                onChange={e => setSearch(e.target.value.toLowerCase())} />
               
            </div>
            
            
        </div>
    )
}

export default Filters