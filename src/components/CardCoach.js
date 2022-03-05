import React from 'react';
import { Card } from 'react-bootstrap';
// import useAuth from './Auth/useAuth';
// import pic from './img/blank-user-profile.png';


const CardCoach = (props) => {
  
  const hireCoach = async (coachId, coachName) => {
    try {
      let { userId } = JSON.parse(localStorage.getItem("user-info"));

      let info = await fetch(`https://api.mrcoach.mx/contract/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({coach: coachId})
      }).then(res => res.json());
      // setContract(info.payload);
      alert(`Good choice! You have hired ${coachName}`);
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
            marginBottom: "1rem",
            boxShadow: "-2px 2px 2px silver"
          }}
        >
          <Card.Img 
            // src={card.avatar}
            src={coach.avatar}
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              alignSelf: "center",
            }} 
          />
          <div className="pt-3 d-flex flex-column align-items-end" style={{height: "100%"}}>
            <div>
              <h6 className="mb-2">{coach.firstName} {coach.lastName}</h6>
              <p style={{lineHeight: "100%"}}><small>{coach.description}</small></p>
            </div>
            <div className="mt-auto ml-auto">
              <button className="btn btn-info" onClick={()=>props.setOpenModal(true)}>See More</button>
              <button 
                className="btn btn-primary ml-2"
                onClick={()=>hireCoach(coach._id, coach.firstName)}
              >Hire
              </button>
            </div>
          </div>
        </Card>
        )
      })}
    </>
  );
};

export default CardCoach;
