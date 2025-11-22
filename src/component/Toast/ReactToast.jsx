import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const ReactToast = () => {
    const notify = () => toast("Yor can Succesfully Install The App");

    return (
         <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
};

export default ReactToast;