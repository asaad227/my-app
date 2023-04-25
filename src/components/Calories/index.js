import React, {useEffect, useState} from 'react'
import "./index.css"
import foods from "../../lib/data"
import Nav from '../Nav';

export default function CaloreCounter() {
    const [nameIn, setNameIn] = useState("");
    const [calories, ] = useState([...foods]);
    const[total, setTotal] = useState(0);
 
    const [data, setData] = useState(() => {
        const storedList = localStorage.getItem("myCalories");
        return storedList ? JSON.parse(storedList) : [];
      });

      useEffect(() => { 
        localStorage.setItem("myCalories", JSON.stringify(data));   
      }, [data]);

    const handleCalories = () => {
       let item = []
        const list = [...calories];
        const result = list.filter((e) => e.name.toLowerCase().includes(nameIn.toLowerCase()));
        console.log(result);
        const caloriesData = {
            name:result[0].name,
            calories:result[0].calories 

        };
        if(data.length === 0){
            item = [caloriesData]
        }else{
            item = [...data, caloriesData]
        }
     
        localStorage.setItem("myCalories", JSON.stringify(item));
        setData(item);
        setNameIn("");
       
     
    }

    useEffect(() => {   
        const totalCalories = data.reduce((acc, e) => acc + e.calories, 0);
        setTotal(totalCalories);
        }, [data]);

        function deleteItem(index){
            const list = [...data];
            list.splice(index, 1);
            localStorage.setItem("myCalories", JSON.stringify(list));
            setData(list);
        }

        function checkData(){
          if(data.length === 0){
            return <h4>Search for food to see calories</h4>
          }else{
            return <h4>Total Calories:  {total} kcals</h4>
          }
        }
  return (
    <div>
    <Nav/>
    <div className='recipe-app'>

 
    <div className='calories-container'>
        <h1>Calorie Calculator</h1>
        <h3>Search for food Calories</h3>
        <p>Enter your ingredient name and hit search to find calories of that ingredient in 100g</p>
        <input type="text" placeholder='Enter your ingredient here...' value={nameIn} onChange={(e) => setNameIn(e.target.value)} />
        <button className='searchBtn' onClick={handleCalories}>Search</button>
        <div>
        <table>
        <thead>   
    <tr>
    <th>Food</th>
    <th>Calories per 100g</th>
    <th>Remove</th>
    </tr>
    </thead>
    {data.map((e, index)=>
    <tbody key={index}>
  
      <tr>

    <td>{data[index]?e.name:""}</td>
    <td>{data[index]?e.calories:""}</td>
    <td className='removeBtn' onClick={()=>deleteItem(index)}>X</td>
    </tr>
    
    </tbody>
    )}
  </table>
        </div>
        <div className='caloriesTotal'>
        {checkData()}
        </div>
            </div>
            </div>
            </div>
  )
}