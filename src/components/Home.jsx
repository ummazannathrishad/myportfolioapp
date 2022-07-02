import React from 'react'

import profile from '../vendor/image/profile.jpg'
import Header from './Header';

const Home = () => {
  return (
    <>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-md-6  mx-auto">
                    <div class="block profile-card">
                        <div class="profile-img">
                            <img src={profile} class="img-fluid" />
                        </div>
                        <div class="profile-body">
                            <h3>Umma Zannath Rishad</h3>
                            <h4>Web Designer</h4>
                            <p>Chittagong,Bangladesh.</p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/umma.zannath"><i class="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/umma-zannath-rishad-321162210"><i class="fa-brands fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/ummazannathrishad"><i class="fa-brands fa-github"></i></a>
                                </li>
                                <li>
                                    <a href="mailto:ummazannathrishad755@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  );
};

export default Home;
