import React from "react";
import './header.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function Header(){
    return(
        <div className="header">
            <nav class="navbar h navbar-expand-lg ">
               <div class="container-fluid d">
                 <a class="navbar-brand" href="#"><h5>Where in the world?</h5></a>
                  <div class="" id="navbarText">
                        <span class="">
                           Dark Mode
                        </span>
                    </div>
                </div>
              </nav>
            </div>
    )
}