const btn = document.getElementById('btnReg')

 async function  submit() {
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password =document.getElementById('password').value
    
  
        const results =  await fetch('http://localhost:4000/agricom/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
            
        }).then((res)=>res.json())
        alert('Sales Person Successfully added')
}
 
// fetch('http://localhost:5000/vehicleRecords/auth/register')
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))