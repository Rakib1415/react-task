import React, { useState } from 'react';
import useFatch from '../hooks/useFetch';
import CustomModal from './Modal';



const Problem2 = () => {
    const {data} = useFatch('https://contact.mediusware.com/api/contacts');
    console.log(data)
    const [isModalOpenA, setIsModalOpenA] = useState(false);
    const [isModalOpenB, setIsModalOpenB] = useState(false);
    const handleCancelA = () => {
        setIsModalOpenA(false);
    };

    const handleCancelB = () => {
        setIsModalOpenB(false);
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={() => setIsModalOpenA(true)} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={() => setIsModalOpenB(true)} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>

           <CustomModal modalOpen={isModalOpenA} handleCancel={handleCancelA} setIsModalOpenA={setIsModalOpenA} setIsModalOpenB={setIsModalOpenB}  />
           <CustomModal modalOpen={isModalOpenB} handleCancel={handleCancelB} setIsModalOpenA={setIsModalOpenA} setIsModalOpenB={setIsModalOpenB}  />
        </div>
    );
};

export default Problem2;