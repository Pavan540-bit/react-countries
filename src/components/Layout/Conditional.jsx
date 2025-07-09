import React, { useState } from 'react';


const Conditional = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="wrapper">
      <button className='d-flex justify-center m-auto mt-5' onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Conditional Message
      </button>

      <div className={`message text-white text-3xl text-center ${show ? 'show' : 'hide'}`}>
        This message is conditionally rendered with a smooth transition!
      </div>
    </div>
  );
};

export default Conditional;
