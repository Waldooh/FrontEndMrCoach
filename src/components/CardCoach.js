import React from 'react';
import { Card } from 'react-bootstrap';
// import useAuth from './Auth/useAuth';
import pic from './img/blank-user-profile.png';


const CardCoach = (props) => {
  
  const hireCoach = async (coachId) => {
    try {
      console.log(coachId)
      let { userId } = JSON.parse(localStorage.getItem("user-info"));
      console.log(userId)

      let info = await fetch(`http://localhost:8000/contract/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({coach: coachId})
      }).then(res => res.json());
      // setContract(info.payload);
      console.log("contract", info)
    } catch(err) {
      alert(err)
    }
  };
  console.log("props", props)

  return (
    <>
      {props.coaches.map((coach) => {
      return (
        <Card 
          // key={index} 
          className="d-flex flex-column"
          style={{
            width: "16rem",
            height: "22rem", 
            padding: "1rem",
            marginLeft: "1rem",
            marginBottom: "1rem"
          }}
        >
          <Card.Img 
            // src={card.avatar}
            src={pic}
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              objectFit: "cover",
              alignSelf: "center",
            }} 
          />
          <div className="pt-3 d-flex flex-column align-items-end" style={{height: "100%"}}>
            <div>
              <h6 className="mb-1">{coach.firstName} {coach.lastName}</h6>
              <p>{coach.description}</p>
            </div>
            <div className="mt-auto mr-auto">
              <button 
                className="btn btn-primary"
                onClick={()=>hireCoach(coach._id)}
              >Hire
              </button>
              <button className="btn btn-info" onClick={()=>props.setOpenModal(true)}>See More</button>
            </div>
          </div>
        </Card>
        )
      })}
    </>
  );
};

export default CardCoach;
