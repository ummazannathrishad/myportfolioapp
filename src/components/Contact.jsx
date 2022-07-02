import React from 'react'
import Header from './Header';

const Contact = () => {
  return (
    <>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="m-2">Address:</h3>
                    <ul class="list-unstyled">
                        <li class="p-2"><a class="text-decoration-none text-muted" href="#"><i class="fa-solid fa-location-dot"></i><span class="ms-2">Chawkbazar,Chandanpura,Chittagong</span></a></li>
                        <li class="p-2"><a class="text-decoration-none text-muted" href="#"><i class="fa-solid fa-envelope"></i><span class="ms-2">ummazannathrishad755@gmail.com</span></a></li>
                        <li class="p-2"><a class="text-decoration-none text-muted" href="#"><i class="fa-solid fa-phone"></i><span class="ms-2">01537337233</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;