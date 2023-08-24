import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [users, setUser] = useState(
    {
       Name: "",
       Email: "",
       Subject: "",
       Message:""
    }
  )
  let name, value
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...users,[name]:value})
    
  }
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = user
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        'Content-Type':'aplication/json'
      },
      body: JSON.stringify({
        Name, Email, Subject, Message
      })
    }
    const res = await fetch('https://e-commerce-contact-d54b4-default-rtdb.firebaseio.com/Message.json', options);
    if (res)
     {
      alert('Your Message Sent')
    }
    else {
      alert('Error Has Been Occured')
    }
    
  }
  return (
    <>
      <div className="contactcontainer" style={{Padding:"30px 40px"}}>
        <div className="contact_page"style={{Padding:"30px 40px"}}>
          <h2 style={{marginTop:"30px",marginLeft:"50px",textTransform:"uppercase",letterSpacing:"1px" ,color:"black",fontSize:"25px"}}>#Contact Us</h2>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div style={{marginTop:"30px",padding:"20px 30px"}} className="form">
                <form className="POST">
               <div className="mb-3">
                <label  for="exampleInput1" className="form-label">Full Name </label>
                <input type="text" className="form-control" id="fname" name="Name" value={users.Name} placeholder="Enter Your Full Name" required autoComplete='off' onChange={data}/>
               </div>
               <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="Email" value={users.Email} placeholder="Enter Your Valid Mail" required autoComplete='off' onChange={data} />
               </div>
               <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="Subject" value={users.Subject} placeholder="Enter Your Subject" required autoComplete='off' onChange={data} />
               </div>
               <div className="mb-3">
               <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Message" value={users.Message} autoComplete='off' onChange={data}></textarea>
                {
                  isAuthenticated ?    
                  <button style={{ border: "none", background: "none", marginTop: "30px", padding: "5px 30px", backgroundColor: "#000000", color: "white", fontSize: "20px", borderRadius: "5px", cursor: "pointer" }} type="submit" onClick={senddata}>Send</button>
                  :<button style={{ border: "none", background: "none", marginTop: "30px", padding: "5px 30px", backgroundColor: "#000000", color: "white", fontSize: "20px", borderRadius: "5px", cursor: "pointer" }} type="submit" onClick={()=>loginWithRedirect}>Login To Send</button>
                }
                </div>
                </form>
                </div>

            </div>

          </div>
        </div>

      </div>
    </>
      
  )
}

export default Contact