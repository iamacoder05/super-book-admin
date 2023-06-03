import React,{useState} from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import Widget from '../../component/Widget/Widget';
import CustomDatePicker from '../../utils/CustomDatePicker/CustomDatePicker';
const Home = () => {

  const [selectedRange, setSelectedRange] = useState('');
  
  const handleDateRangeChange = (range) => {
    setSelectedRange(range);
  };

  const initialDate = new Date(); // Set the initial date here

  return (
    <div className='home'>

      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {/* datepicker */}
        <div>
        <CustomDatePicker onApply={handleDateRangeChange} initialDate={initialDate} />
        <p>Selected Date Range:  {selectedRange ? selectedRange : initialDate.toDateString()}</p>
      </div>
       <div className='widget'>
        <Widget type="userDetails"/>
        <Widget type="activeUser"/>
        <Widget type="Today"/>
        <Widget type="user"/>
       </div>
        </div>
    </div>
  )
}

export default Home
