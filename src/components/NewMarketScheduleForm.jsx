import React from 'react';

function NewMarketSheduleForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='day'
          placeholder='Day'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          type='text'
          id='hours'
          placeholder='Hours'/>
        <input
          type='text'
          id='Booth'
          placeholder='Booth'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}


export default NewMarketSheduleForm;
