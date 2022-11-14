import React from "react";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './main.css'
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Main(){

    const history = useNavigate()

    const dispatch = useDispatch()

    const [Paises,SetPaises] = useState([])
    const [pesquisa,SetPesquisa] = useState('')
    const [TrueName,SetTrueName] = useState(false)
    const [Paisbyname, SetPaisbyname] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then((res)=>{
            return res.json()
        }).then((paises)=>{
            SetPaises(paises) 
            console.log(paises) 
        })
    },[])

    function pegarValor(e){
        let valor  = e.target.value
        SetPesquisa(valor)
    }

    function HandleByName(e){
        e.preventDefault()
        if(pesquisa == ''){
            alert('digite algum pais no campo abaixo')
        }else{
            let url = `https://restcountries.com/v3.1/name/${pesquisa}`
            fetch(url).then((res)=>{
                return res.json()
            }).then((paisbyname)=>{
                if(paisbyname.status){
                    alert('pais não existente')
                }else{
                    SetPaisbyname(paisbyname)
                    SetTrueName(true)
                }
        })}
    }

    function FilterByRegion(RegionName){
        let url =  `https://restcountries.com/v3.1/region/${RegionName}`
        fetch(url).then((res)=>{
            return res.json()
        }).then((regions)=>{
            SetPaises([])
            SetTrueName(false)
            SetPaises(regions)
            console.log(regions)
        })
    }

    function HandleNextInfo(name,population,r,sr,capital,tld,Cu,languages,img){
        dispatch({
            type:"nativename",
            payload:name
        })
        dispatch({
            type:"population",
            payload:population
        })
        dispatch({
            type:"region",
            payload:r
        })
        dispatch({
            type:"subregion",
            payload:sr
        })
        dispatch({
            type:"capital",
            payload:capital
        })
        dispatch({
            type:"tld",
            payload:tld
        })
        dispatch({
            type:"currencies",
            payload:JSON.stringify(Cu)
        })
        dispatch({
            type:"languages",
            payload:JSON.stringify(languages)
        })
        dispatch({
            type:"imagem",
            payload:img
        })

        history('/paisdetail')
    }

    return(
        <>
           <Header></Header>
           <div className="main">   
               <nav class="navbar pesquisa ">
                    <div class="container-fluid f">
                        <form  onSubmit={HandleByName} class="d-flex">
                           <input onChange={pegarValor} class="" type={'search'} placeholder="🔍 Search for a country" aria-label="Search"></input>
                        </form>
                        <li class="nav-item dropdown">
                            <a class="nav-link filter dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter By Region
                            </a>
                          <ul class=" regions dropdown-menu" aria-labelledby="navbarDropdown">

                            <li onClick={()=>FilterByRegion('Africa')}  className="v nav-item">Africa</li>
                            <li onClick={()=>FilterByRegion('Americas')}  className="v nav-item">Americas</li>
                            <li onClick={()=>FilterByRegion('Europe')}  className="v nav-item">Europe</li>
                            <li onClick={()=>FilterByRegion('Asia')}  className="v nav-item">Asia</li>
                            <li onClick={()=>FilterByRegion('Oceania')}  className="v nav-item">Oceania</li>
                            <li onClick={()=>FilterByRegion('Antarctic')}  className="v nav-item">Antarctic</li>
                          </ul>
                       </li>
                    </div>
                   
                </nav>  

               <section className="items">
                      {TrueName ?
                        <div className="paises">
                            <div className="card card-pais">
                            <img onClick={()=>HandleNextInfo(Paisbyname[0].name.common,Paisbyname[0].population,Paisbyname[0].region,Paisbyname[0].subregion,Paisbyname[0].capital[0],Paisbyname[0].tld[0],Paisbyname[0].currencies,Paisbyname[0].languages,Paisbyname[0].flags.png)}  src={Paisbyname[0].flags.png} class="card-img-top image-pais"></img>
                            <div class="card-body carta">
                                <h5 class="card-title">{Paisbyname[0].name.common}</h5>
                                <p class="card-text">Population: {Paisbyname[0].population}</p>
                                <p>região: {Paisbyname[0].region}</p>
                                <p>Capital: {Paisbyname[0].capital}</p>
                            </div>   
                         </div>
                        </div>
                           :
                           <div className="paises">
                             {Paises.map((p)=>
                                <div className="card card-pais">
                                    <img onClick={()=>HandleNextInfo(p.name.common,p.population,p.region,p.subregion,p.capital[0],p.tld[0],p.currencies,p.languages,p.flags.png)} src={p.flags.png} class="card-img-top image-pais"></img>
                                    <div class="card-body carta">
                                        <h5 class="card-title">{p.name.common}</h5>
                                        <p class="card-text">Population: {p.population}</p>
                                        <p>região: {p.region}</p>
                                        <p>Capital: {p.capital}</p>
                                    </div>   
                                 </div>
                          )}
                           </div>
                      }
               </section>                   
        </div>
        </>
    )}