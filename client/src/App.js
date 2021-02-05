import React, { useState } from 'react';
import Card from "./components/card/card";
import {useSelector} from "react-redux";
import _ from 'lodash';

function App() {
  const data = useSelector((state) => state);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  
  return (
      <div className="App">
        <header className="p-2 pt-6 text-center text-gray-200 bg-gray-800 min-h-20">
          {/* <h4 className="text-2xl font-bold">TakeAway Test</h4> */}
          <div className="justify-center my-4 md:flex md:px-64">
            <div className="w-full my-2 md:w-6/12">
              <input type="text" onChange={(ev) => setFilter(ev.target.value.toLowerCase())} className="w-full p-2 text-gray-800 bg-gray-300 rounded-md outline-none md:mr-16 bordr-0 focus:outline-none" placeholder="Type to filter"/>
            </div>
            <div className="w-full my-2 md:w-6/12">
              <select onChange={(ev) => setSort(ev.target.value)} className="w-full p-2 text-gray-800 bg-gray-300 rounded-md outline-none md:ml-16 bordr-0 focus:outline-none">
                <option value="">Sort values</option>
                <option value="bestMatch">Best Match (highest to lowest)</option>
                <option value="newest">Newest (highest to lowest)</option>
                <option value="ratingAverage">Rating Average (highest to lowest)</option>
                <option value="distance">Distance (highest to lowest)</option>
                <option value="popularity">Popularity (highest to lowest)</option>
                <option value="averageProductPrice">Average Product Price (highest to lowest)</option>
                <option value="deliveryCosts">Delivery Cost (highest to lowest)</option>
                <option value="minCost">Minimum Cost (highest to lowest)</option>
              </select>
            </div>
          </div>
        </header>
        
        {
                
          (data.favourites.length > 0) ?   
          <div className="py-4 bg-gray-100">
            <div className="w-full px-2 py-4 md:px-8">
              <h4>Favourites</h4>
            </div>     
            <section className="grid gap-4 p-4 grid-col-1 md:grid-cols-4">
            {
              _.chain(data.favourites)
              .orderBy([`${(sort) ? 'sortingValues.'+sort : 'sortingValues'}`],['desc'])
              .filter(_.iteratee({'status': 'open'}))
              .map( (res, index) => {
                return (res.name.toLowerCase().includes(filter)) ? <Card key={index} restaurant={res} favourite={true} sort={sort} filter={filter}/> : ''
              })
              .value()
            }
            </section>
            <section className="grid gap-4 p-4 grid-col-1 md:grid-cols-4">
         
            {
              _.chain(data.favourites)
              .orderBy([`${(sort) ? 'sortingValues.'+sort : 'sortingValues'}`],['desc'])
              .filter(_.iteratee({'status': 'order ahead'}))
              .map( (res, index) => {
                return (res.name.toLowerCase().includes(filter)) ? <Card key={index} restaurant={res} favourite={true} sort={sort} filter={filter}/> : ''
              })
              .value()
            }
            </section>
            <section className="grid gap-4 p-4 grid-col-1 md:grid-cols-4">
         
            {
              _.chain(data.favourites)
              .orderBy([`${(sort) ? 'sortingValues.'+sort : 'sortingValues'}`],['desc'])
              .filter(_.iteratee({'status': 'closed'}))
              .map( (res, index) => {  
                return (res.name.toLowerCase().includes(filter)) ? <Card key={index} restaurant={res} favourite={true} sort={sort} filter={filter}/> : ''              
              })
              .value()
            }
          </section>
          </div> : ''
        }
        {
          <div className="py-4">
            <section className="grid gap-4 p-4 grid-col-1 md:grid-cols-4">
              {
                _.chain(data.restaurants)
                .orderBy([`${(sort) ? 'sortingValues.'+sort : 'sortingValues'}`],['desc'])
                .filter(_.iteratee({'status': 'open'}))
                .map( (res, index) => {
                  return (res.name.toLowerCase().includes(filter)) ? <Card key={index} restaurant={res} favourite={false} sort={sort} filter={filter}/> : ''
                })
                .value()
              } 
            </section>
            <section className="grid gap-4 p-4 grid-col-1 md:grid-cols-4">
              {
                _.chain(data.restaurants)
                .orderBy([`${(sort) ? 'sortingValues.'+sort : 'sortingValues'}`],['desc'])
                .filter(_.iteratee({'status': 'order ahead'}))
                .map( (res, index) => {
                  return (res.name.toLowerCase().includes(filter)) ? <Card key={index} restaurant={res} favourite={false} sort={sort} filter={filter}/> : ''
                })
                .value()
              }
            </section>
            <section className="grid gap-4 p-4 grid-col-1 md:grid-cols-4"> 
          {
            _.chain(data.restaurants)
            .orderBy([`${(sort) ? 'sortingValues.'+sort : 'sortingValues'}`],['desc'])
            .filter(_.iteratee({'status': 'closed'}))
            .map( (res, index) => {
              return (res.name.toLowerCase().includes(filter)) ? <Card key={index} restaurant={res} favourite={false} sort={sort} filter={filter}/> : ''
            })
            .value()
          }          
        </section>
          </div>
        }
      </div>
  );
}

export default App;
