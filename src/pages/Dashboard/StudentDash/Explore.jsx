import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../components/Auth/useAuth';
import CardCoach from '../../../components/CardCoach';
import CoachCV from '../../../components/ModalContent/CoachCV';
import Popup from '../../../components/Popup';
// import Yo from '../../../components/img/blank-user-profile.png';

const Explore = () => {

  const [openModal, setOpenModal] = useState(false);
  const { coaches, coachesData } = useAuth();
  useEffect(() => {
    coachesData();
  }, []);

  return (
    <>
      <Popup trigger={openModal} setTrigger={setOpenModal}>
        <CoachCV />
      </Popup>
      <h1>Coaches List</h1>
      <Container>
        <Row>
          <CardCoach coaches={coaches} setOpenModal={setOpenModal} />
        </Row>
      </Container>

    </>
  )
}

export default Explore;