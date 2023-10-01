

const Gib = () => {
const Fetch=async()=>{
    const b="{mm:post}"
   

       const res=await fetch("http://localhost:1000/api/user/login",{
            method:"POST",
            body:b,
            Headers:{
                "Content-Type":"application/json"
            }
        })
        const json=res.json()
        console.log(json)
  
   
}
    return ( 
        <div>
            <button onClick={Fetch}>Post</button>
        </div>
     );
}
 
export default Gib;