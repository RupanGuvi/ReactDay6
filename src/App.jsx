import React, { useState } from 'react';
import UseMemo from './Components/UseMemo';
import UseCallbackHook from './Components/UseCallbackHook';
import Counter from './Components/Counter';
import ReactForms from './Components/ReactForms';

const App = () => {
 // const [value, setValue] = useState(0);

  return (
    <div>
        {/* <UseMemo />
       <UseCallbackHook /> 
       <Counter setValue={setValue} value = {value} /> */}
       <ReactForms />
       
    </div>
  );
};

export default App;