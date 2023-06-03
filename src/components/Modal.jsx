import { Modal } from 'antd';
import React from 'react';

const CustomModal = ({modalOpen, handleCancel, setIsModalOpenA, setIsModalOpenB}) => {
    
  return (
    <Modal
                closable={false}
                style={{ marginTop: 150 }}
                title={
                    "Hello"
                }
                open={modalOpen}
                width={381}
                onCancel={handleCancel}
                footer={[]}
            >
                <div className="mb-10">
                    
                </div>
                <div className="d-flex gap-3">
                <button onClick={() => setIsModalOpenA(true)} type="button" class="btn btn-primary">All Contracts</button>
                <button onClick={() => setIsModalOpenB(true)}  type="button" class="btn btn-primary">US Contracts</button>
                <button onClick={handleCancel} type="button" class="btn btn-primary">Close</button>
                </div>
            </Modal>
  )
}

export default CustomModal;
