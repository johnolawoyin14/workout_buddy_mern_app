import {useEffect, useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/workoutForm'
import {useAuthContext} from "../hooks/useAuthContext"


const Home = () => {
const {workouts,dispatch}=useWorkoutsContext()
const {user}=useAuthContext()


const [len,setLen]=useState(false)
    useEffect(()=>{
        const fetchWorkouts=async ()=>{
            const response = await fetch("https://workout-api-ty4i.onrender.com/api/workouts",{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${user.token}`
                }
            });
            const json=await response.json()
 if (json.length < 1) {
   setLen(true);
 }
            if (response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        if (user){

            fetchWorkouts()
        }
        

    },[dispatch,user])
    return ( 
        <div className="home">
            

            <div className="workouts">
                {/* <p>jfjsj</p> */}
                {len && <div>No workouts</div> }
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout.id} workout={workout} />
                    ))}
                
            </div>
            <WorkoutForm/>
            
        </div>
     );
}
 
export default Home;
