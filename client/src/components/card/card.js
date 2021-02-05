import React, { useCallback } from 'react';
import './card.css';
import { useDispatch } from "react-redux";
import { saveFavouriteRestaurants, removeFavouriteRestaurants } from '../../actions'

function Card (props) {
    const dispatch = useDispatch();

    const saveFavourite = useCallback(()=>{
        // Do some things with props or state
        dispatch(saveFavouriteRestaurants(props.restaurant))
    },[props.restaurant, dispatch])

    const removeFavourite = useCallback(()=>{
        // Do some things with props or state
        dispatch(removeFavouriteRestaurants(props.restaurant))
    },[props.restaurant, dispatch])

    return (
        <div className={(!props.favourite) ? "p-4 border-2 border-gray-200 rounded-md shadow-sm" : "p-4 border-2 border-gray-200 rounded-md shadow-sm"}>
            <div className="flex justify-between my-2 ">
                <div className="font-bold">
                    {props.restaurant.name}
                </div>
                <div className="">
                    <span className="text-sm font-bold text-yellow-800">{props.restaurant.status}</span><br/>
                </div>
            </div>
            <div className="relative">
                <div>
                    <span className={(props.sort === 'bestMatch')  ? "font-bold" : ''}>Best Match - <span className="">{props.restaurant.sortingValues.bestMatch}</span></span><br/>
                    <span className={(props.sort === 'newest')  ? "font-bold" : ''}>Newest - <span className="">{props.restaurant.sortingValues.newest}</span></span><br/>
                    <span className={(props.sort === 'ratingAverage')  ? "font-bold" : ''}>Rating Average - <span className="">{props.restaurant.sortingValues.ratingAverage}</span></span><br/>
                    <span className={(props.sort === 'distance')  ? "font-bold" : ''}>Distance - <span className="">{props.restaurant.sortingValues.distance}</span></span><br/>
                    <span className={(props.sort === 'popularity')  ? "font-bold" : ''}>Popularity - <span className="">{props.restaurant.sortingValues.popularity}</span></span><br/>
                    <span className={(props.sort === 'averageProductPrice')  ? "font-bold" : ''}>Average Product Price - <span className="">{props.restaurant.sortingValues.averageProductPrice}</span></span><br/>
                    <span className={(props.sort === 'deliveryCosts')  ? "font-bold" : ''}>Delivery Costs - <span className="">{props.restaurant.sortingValues.deliveryCosts}</span></span><br/>
                    <span className={(props.sort === 'minCost')  ? "font-bold" : ''}>Min Cost - <span className="">{props.restaurant.sortingValues.minCost}</span></span><br/>
                </div>
                <div className="absolute bottom-0 right-0">
                    { (props.favourite)
                        ? 
                            <button className="px-4 text-gray-200 bg-red-600 rounded-md outline-none focus:outline-none hover:bg-red-400" onClick={removeFavourite}>-</button> 
                        : 
                        <>
                            <button className="px-4 text-gray-200 bg-gray-600 rounded-md outline-none focus:outline-none hover:bg-gray-800" onClick={saveFavourite}>+</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;
