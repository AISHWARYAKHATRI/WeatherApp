import React, {useState, useEffect} from "react";
import "./css/style.css";

const date = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Ahmedabad"); 

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=07d2155342e46aa10d78bd8338eb4d68`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return(
        <>
        <div className="container"> 
        <div className="heading">
            <h1>
                Know Current Weather 🌦
            </h1>
        </div>
            <div className = "box">
                <div className = "inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputField"
                        onChange = { (event) =>{
                             setSearch(event.target.value)
                        }}
                    />
                </div>

                {!city ? (
                    <div>
                    {search === "" ? <p className="errorMsg">Search For City!</p> : <p className="errorMsg">No City Found!</p> }
                    
                 <div className="info">
                 <h2 className="location">
                 <i className="fas fa-street-view"></i>{search}
                 </h2>
                 <h1 className="temp">
                   
                 </h1>
                 {/* <h3 className="tempmin_max"> Min :  | Max : </h3> */}
                 <h3 className="date">
                Date: {
                 date.toLocaleDateString(undefined, options)
                }
                </h3>
            </div>
            
            <div className ="wave -one"></div>
            <div className ="wave -two"></div>
            <div className ="wave -three"></div>
           
                
             </div>
                ) : (
                    <div>
                    <div className="info">
                 <h2 className="location">
                 <i className="fas fa-street-view"></i>{search}
                 </h2>
                 <h1 className="temp">
                    {city.temp} °C
                 </h1>
                 <h3 className="tempmin_max"> Min : {city.temp_min}  | Max : {city.temp_min} </h3>
                 <h3 className="date">
                Date: {
                 date.toLocaleDateString(undefined, options)
                }
            </h3>
            </div>
            
            <div className ="wave -one"></div>
            <div className ="wave -two"></div>
            <div className ="wave -three"></div>
             </div>
                )}
                
            </div>
            </div>
            <p className="footer">© 2022 Aishwarya Khatri</p>
        </>
    )
}

export default Tempapp;