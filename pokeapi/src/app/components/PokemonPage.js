"use client"

import React from "react";
import styles from './PokemonPage.module.css'
import PokemonButtonCard from "./PokemonButtonCard";
import { useState,useEffect } from "react";
import PokemonListA from "./PokemonListType";
import PokemonListAll from "./PokemonListAll";

function PokemonPage(){


    
    const types=[
        {id:0,color:"all"},
        {id: 1,color: "bug"},
        {id: 2,color: "dark"},
        {id: 3,color: "dragon"},
        {id: 4,color: "electric"},
        {id: 5,color: "fairy"},
        {id: 6,color: "fighting"},
        {id: 7,color: "fire"},
        {id: 8,color: "flying"},
        {id: 9,color: "ghost"},
        {id: 10,color: "grass"},
        {id: 11,color: "ground"},
        {id: 12,color: "ice"},
        {id: 13,color: "normal"},
        {id: 14,color: "poison"},
        {id: 15,color: "psychic"},
        {id: 16,color: "rock"},
        {id: 17,color: "steel"},
        {id: 18,color: "water"},
    ]


    const[box,setBox]=useState(false);
    const[poketype,setPokeType]=useState("all");
    const[numberPage,setNumberPage]=useState(1);
    


    const click=(boxtext)=>{
        setPokeType(boxtext);
        setNumberPage(1);
        setBox(false);
    }

    const click2=()=>{
        setBox(true);
    }

    const plus=()=>{
        setNumberPage(numberPage+1);
    }



    const menus=()=>{
        numberPage!==1 && setNumberPage(numberPage-1);
    }

    

    return(
        <div className={styles.maincointainer} >
            <div className={styles.title} >
                <img src="/images/pokeballicon.svg"/>
                <h1>Pokedex</h1>
            </div>
            <div className={styles.btngroup}>

                <button className={styles.typeButton}
                        onClick={click2}
                ><p>{poketype}</p> </button>

                {box===true && 
                    <div className={styles.optioncontainer} >
                        {
                            types.map(type=>{
                                return(
                                    <div key={type.id} className={styles.option}>
                                        <button className={styles.optionButton} onClick={()=>click(type.color)} >
                                            
                                                <p>{type.color}</p> 
                                                <div className={styles.vertical} style={{background: `var(--${type.color})`}} ></div>
                                            
                                        </button>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                
                }
            </div>

                {
                    poketype==="all"? <PokemonListAll page={numberPage-1} />:<PokemonListA poketype={poketype} page={numberPage-1}/>
                }

            <div className={styles.buttons} >
                <button onClick={menus} ><img src="/images/chevron_left.svg" /></button>
                <p>{numberPage}</p>
                <button onClick={plus} ><img src="/images/chevron_right.svg" /> </button>
            </div>
        </div>
    )
}

export default PokemonPage;