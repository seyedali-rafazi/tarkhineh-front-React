import React from 'react'
import Loading from '../ui/Loading';
import useUser from '../feachers/authentication/useUser';
import Navbar from '../ui/Navbar';
import ShippingStep from '../components/shipping/ShippingStep';
import Footer from '../ui/Footer';

function Shipping() {
    const { user,cart, isLoading } = useUser();
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      );
    }
    return (
      <div className=" xl:max-w-7xl min-h-screen">
        <Navbar user={user} />
        <ShippingStep cart={cart} user={user}/>
        <Footer/>
      </div>
    );
}

export default Shipping