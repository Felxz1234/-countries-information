import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './PaisDetais.css'
import { useSelector } from "react-redux";
import Header from "../header/header";
import { Link } from "react-router-dom";

export default function PaisDetail(){

    const dados = useSelector((state)=>{return state})

    return(
        < >
           <Header></Header>
            <Link to={'/'}><button>back</button></Link>
           <div className="Paisdetail">
              <div class="card p" >
                <img src={dados.imagem} className='card-img-top'></img>
                <div class="card-body">
                    <h5 class="card-title tt">{dados.NativeName}</h5>
                </div>
                <ul class="list-group mm list-group-flush">
                    <li class="list-group-item">Name: {dados.NativeName}</li>
                    <li class="list-group-item">Population: {dados.population}</li>
                    <li class="list-group-item">Region: {dados.region}</li>
                    <li class="list-group-item">Subregion: {dados.subregion}</li>
                    <li class="list-group-item">Capital: {dados.capital}</li>
                    <li class="list-group-item">Top Level Domain: {dados.TopLevelDomain}</li>
                    
                </ul>
                <div class="card-body">
                  <li class="list-group-item fd">languages: {dados.languages}</li>
                    
                </div>
               
                </div>
            </div>
               
        </>
    )
}