import * as React from 'react';
import { useLocation } from 'react-router-dom';
import "./list.css"
import Header from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import { useState } from 'react';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../component/searchItem/SearchItem';

const List = () => {
 const location = useLocation();
 const [destination,setDestination] = useState(location.state.destination)
 const [date,setDate] =useState(location.state.date)
 const [options,setOptions] = useState(location.state.options)
 const [openDate,setOpenDate] =useState(false)
  return (
   <>
   <Navbar/>
   <Header type="list"/>
   <div className="listContainer">
   <div className="listwrapper">
   <div className="listSearch">
    <h1 className="lsTitle">
      Search
    </h1>
    <div className="lsItem">
      <label>Destination</label>
      <input type="text"  placeholder={destination}/>
    </div>
    <div className="lsItem">
      <label>Check-in Date</label>
      <span onClick={()=>setOpenDate(!openDate)} className="lsSearchText">
                {`${format(date[0].startDate, "dd/MM/yyyy")} 
                to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
             {openDate &&    
             (<DateRange onChange = {(item)=> setDate([item.selection])}
                minDate = {new Date()}
                ranges = {date}/>)}
    </div>
    <div className="lsItem">
      <label>Option</label>
      <div className="lsOptions">
        <div className="lsOptionItem">
          <span className="lsOptionText">
           Min price <small>per night</small>
          </span>
          <input type="number" className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
           Max price <small>per night</small>
          </span>
          <input type="number" className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
           Adult
          </span>
          <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
           Children 
          </span>
          <input type="number"  min={0} className="lsOptionInput" placeholder={options.children}/>
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
           Room
          </span>
          <input type="number"  min={1} className="lsOptionInput" placeholder={options.room} />
        </div>
        </div>
    </div>
    <button>
      Search
    </button>

   </div>
   <div className="listResult">
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
    <SearchItem/>
   </div>
   </div>
   </div>
   </>
  )
}

export default List