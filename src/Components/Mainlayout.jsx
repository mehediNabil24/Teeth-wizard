
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Modal from './Modal';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Modal></Modal>
            
        </div>
    );
};

export default Mainlayout;