
import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import { DogService } from '../service/DogService';

export function Home() {

const [dogs, setDogs] = useState([]);

useEffect(()=> {
    async function fetchDogs(){
        const data = await DogService.fetchAll();
        // voir les données qui sont recupérées de la data 
        console.log(data);
        setDogs(data);
        
    }
    fetchDogs()
}, []);


  return (
    <div>
        <div className="maflex">
            {dogs.map(dog => (
                <div className="card">
                <h4 key={dog.id}>Nom : {dog.name} Race: {dog.breed}</h4>
                <img  src={dog.picture}  alt="" />
                </div>
            )) }
        </div>
    </div>
  )
}