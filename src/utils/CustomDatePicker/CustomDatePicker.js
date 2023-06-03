import React, { useState, useRef, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './CustomDatePicker.css';

export default function CustomDatePicker({ onApply, initialDate }) {
  const [dateRange, setDateRange] = useState([
    {
      startDate: initialDate,
      endDate: initialDate,
      key: 'selection',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setDateRange([
      {
        startDate: initialDate,
        endDate: initialDate,
        key: 'selection',
      },
    ]);
  }, [initialDate]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleApply = () => {
    setIsOpen(false);
    inputRef.current.value = `${dateRange[0].startDate.toDateString()} - ${dateRange[0].endDate.toDateString()}`;
    const selectedStartDate = dateRange[0].startDate;
    const selectedEndDate = dateRange[0].endDate;
    const selectedRange = `${selectedStartDate.toDateString()} - ${selectedEndDate.toDateString()}`;
    onApply(selectedRange);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setDateRange([
      {
        startDate: initialDate,
        endDate: initialDate,
        key: 'selection',
      },
    ]);
  };

  return (
    <div className='custom-date-picker'>
      {initialDate ?(<input
        type='text'
        onClick={handleInputClick}
        readOnly
        ref={inputRef}
        placeholder='Select Date Range'
        className='date-range-input'
        defaultValue={`${initialDate.toDateString()} - ${initialDate.toDateString()}`}
      />):(
      <input
        type='text'
        onClick={handleInputClick}
        readOnly
        ref={inputRef}
        placeholder='Select Date Range'
        className='date-range-input'
        // defaultValue={`${initialDate.toDateString()} - ${initialDate.toDateString()}`}
      />)}
      {isOpen && (
        <div className='date-range-picker-container'>
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            direction='horizontal'
            className='range-picker'
          />
          <div className='buttons'>
            <button className='apply-button' onClick={handleApply}>
              Apply
            </button>
            <button className='cancel-button' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
