import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import useAuth from '../../../components/Auth/useAuth';
// import Popup from '../../../components/Popup';
// import { DateRangePicker } from 'react-date-range';

const Routines = () => {

  const [data, setData] = useState([]);
  const { exercises, exercisesList, account, pupils, pupilsData } = useAuth();
  
  const getRoutines = async () => {
    await fetch("https://api.mrcoach.mx/routines/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
    })
    .then((result) => result.json())
    .then((json) => {
      setData(json.payload.allRoutines)
    })
  };
  useEffect(() => {
    getRoutines()
  }, []);

  // ----- Lista de ejercicios ------ //
  useEffect(() => {
    exercisesList()
  }, []);

  // ----- Lista de pupilos ------ //
  useEffect(() => {
    pupilsData();
  }, []);
  
  // ----------- Petición DELETE -------------- //
  const deleteRoutine = async () => {
    await fetch(`https://api.mrcoach.mx/routines/${rutina._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
    })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(item => {
      setData(data.filter(item => item._id !== rutina._id));
      console.log("item",item)
      setDeleteRoutineModal(false);
    })
  };

    // ----------- Petición CREATE -------------- //
  const postRoutine = async () => {
    console.log(rutina)
    await fetch("https://api.mrcoach.mx/routines/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "authorization": localStorage.getItem("jwt")
      },
      body: JSON.stringify(rutina)
    })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(result => {
      if(result.ok) {
        console.log(result)
        setData(data.concat(result.payload))
        setOpenModal(false)
      } else { console.log("Ups, algo falló con el post") }
    })
  }

   // ----------- Petición UPDATE -------------- //
  const patchRoutine = async () => {
    await fetch(`https://api.mrcoach.mx/routines/${rutina._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
      body: JSON.stringify(rutina)
    })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(item => {
      console.log("item",item)
      let newData = data;
      newData.map(item => {
        if(rutina._id === item._id) {
          item.title = rutina.title;
          item.pic = rutina.pic;
          item.group = rutina.group;
          item.start = rutina.start;
          item.end = rutina.end;
          item.days = rutina.days;
          item.level = rutina.level;
          item.cardio = rutina.cardio;
          item.notes = rutina.notes;
          item.exercises = rutina.exercises;
        }
        return newData;
      })
      setData(newData);
      setOpenModal(false);
    });
  };


  const [openModal, setOpenModal] = useState(false);
  const [deleteRoutineModal, setDeleteRoutineModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [assignModal, setAssignModal] = useState(false);
  const [rutina, setRutina] = useState({
    _id: "", // posiblemente innecesario el id
    coach: account.userId,
    title: "",
    pic: "",
    group: "",
    start: "",
    end: "",
    days: "",
    level: "",
    cardio: "",
    notes: "",
    exercises: [], //buscar cómo guardar el array correctamente del Multiselect
  });

  const selectRoutine = (item, action) => {
    setRutina(item);
    if(action === "details"){
      setEditModal(true)
    }else if(action === "assign"){
      setAssignModal(true)
    }else{
      setDeleteRoutineModal(true);
    }
    console.log(rutina)
  };

  // completar función de asignación de rutina
  const assignRoutine = async (routineId, routineName) => {
    setAssignModal(false);
    alert(`You have sended ${routineName}`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRutina({ ...rutina, [name]: value });
    console.log("Rutina:", rutina)
  };

  return (
    <div>
      {/* --------------Modales (New Routine)--------------- */}
      <Modal show={openModal}>
        <Modal.Header>
          <h1>New Routine</h1>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row className="label-group">
              <Col>
                <label className="mb-0">Routine name:
                  <input 
                    className="label-control" 
                    type="text" 
                    name="title" 
                    value={rutina ? rutina.title : ""} 
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
              <Col>
                <label className="mb-0">Group class:
                  <input 
                    className="label-control" 
                    type="text" 
                    name="group" 
                    placeholder="Enter group"
                    value={rutina ? rutina.group : ""}
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
            </Row>

            <Row className="label-group">
              <label className="d-flex flex-column">Routine term:</label>
              <Col>
                <label className="text-right"><small>Start Day</small>
                  <input 
                    className="label-control" 
                    type="date" 
                    name="start" 
                    value={rutina ? rutina.start : ""}
                    onChange={handleChange}
                  />
                </label>
              </Col>
              <Col>
                <label className="text-right"><small>End Day</small>
                  <input 
                    className="label-control" 
                    type="date" 
                    name="end" 
                    value={rutina ? rutina.end : ""}
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
            </Row>

            <Row className="label-group">
              <Col>
                <label>What days:
                  <div className="d-flex">
                    <label className="mr-3" for="days">M
                      <input 
                        type="checkbox" 
                        name="days"
                        value="lunes"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} // hacer función diferente para guardar los días
                      />
                    </label>
                    <label className="mr-3" for="days">Tu
                      <input 
                        type="checkbox" 
                        name="days"
                        value="martes"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">W
                      <input 
                        type="checkbox" 
                        name="days"
                        value="miercoles"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">Th
                      <input 
                        type="checkbox" 
                        name="days"
                        value="jueves"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">F
                      <input 
                        type="checkbox" 
                        name="days"
                        value="viernes"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="mr-3" for="days">Sa
                      <input 
                        type="checkbox" 
                        name="days"
                        value="sabado"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">Su
                      <input 
                        type="checkbox" 
                        name="days"
                        value="domingo"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </label>
              </Col>
            </Row>

            <label className="mb-0">What exercises:
                </label>
            <Multiselect
              isObject={false}
              onKeyPressFn={function noRefCheck(){}}
              onRemove={function noRefCheck(){}}
              onSearch={function noRefCheck(){}}
              onSelect={function noRefCheck(){}}
              placeholder="Choose your exercises"
              options={exercises.map(item => (item.title))}
              // name={ejercicio seleccionado}
              // value={rutina ? rutina.exercises.push(rutina) : ""} // verificar si funciona el .push
              onChange={handleChange}
            /><br />

            <label className="mb-0">Cardio:</label>
            <input 
              className="label-control"
              type="text" 
              name="cardio"
              placeholder="Ej: 120’’ prank call + 6x (30’’ sprint + 90’’ walk)"
              value={rutina ? rutina.cardio : ""}
              onChange={handleChange} 
            /><br />

            <Row className="label-group">
              <Col>
                <label>Difficulty level: 
                  <input 
                    list="level"
                    className="label-control"
                    name="level" 
                    value={rutina ? rutina.level : ""}
                    onChange={handleChange} 
                  />
                  <datalist id="level">
                    <option value="Easy" />
                    <option value="Medium" />
                    <option value="Hard" />
                    {/* <option value="🟢" />
                    <option value="🟡" />
                    <option value="🔴" /> */}
                  </datalist>
                </label>
              </Col>
              <Col>
                <label className="mb-0">Image:
                  <input 
                    className="label-control" 
                    type="file" 
                    name="pic" 
                    value={rutina ? rutina.pic : ""}
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
            </Row>
            
            <Row>
              <label>Notes:
                <textarea 
                  className="label-control" 
                  name="notes" 
                  placeholder="Enter some indications if needed..."
                  value={rutina ? rutina.notes : ""}
                  onChange={handleChange}
                />
              </label>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>postRoutine()}>Add +</button>
          <button className="btn btn-danger" onClick={()=>setOpenModal(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>

      {/* ---------Assign modal----------- */}
      <Modal show={assignModal}>
        <Modal.Header>
          <h3>Pupil List</h3>
        </Modal.Header>
        <Modal.Body>
          <div>
            <table className="table">
              {/* <thead>
                <tr>
                  <th scope="col">*</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                </tr>
              </thead> */}
              <tbody>
                {pupils.map(item => (
                  <tr>
                    <th scope="row">
                      <input type="radio" className="mt-3" value={item._id} />
                    </th>
                    <td>
                      <img
                        src={item.avatar} 
                        alt="avatar" 
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover"
                        }}
                      />
                    </td>
                    <td className="pt-3">{item.firstName}</td>
                    <td className="pt-3">{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>assignRoutine(rutina._id, rutina.title)}>Assign</button>
          <button className="btn btn-danger" onClick={()=>setAssignModal(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>

      {/* ---------Edit modal----------- */}
      <Modal show={editModal}>
        <Modal.Header>
          <h3>Routine Details</h3>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row className="label-group">
              <Col>
                <label className="mb-0">Routine name:
                  <input 
                    className="label-control" 
                    type="text" 
                    name="title" 
                    value={selectRoutine && selectRoutine.title} 
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
              <Col>
                <label className="mb-0">Group class:
                  <input 
                    className="label-control" 
                    type="text" 
                    name="group" 
                    placeholder="Enter group"
                    value={selectRoutine && selectRoutine.group} 
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
            </Row>

            <Row className="label-group">
              <label className="d-flex flex-column">Routine term:</label>
              <Col>
                <label className="text-right"><small>Start Day</small>
                  <input 
                    className="label-control" 
                    type="date" 
                    name="start" 
                    value={selectRoutine && selectRoutine.start} 
                    onChange={handleChange}
                  />
                </label>
              </Col>
              <Col>
                <label className="text-right"><small>End Day</small>
                  <input 
                    className="label-control" 
                    type="date" 
                    name="end" 
                    value={selectRoutine && selectRoutine.end} 
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
            </Row>

            <Row className="label-group">
              <Col>
                <label>What days:
                  <div className="d-flex">
                    <label className="mr-3" for="days">M
                      <input 
                        type="checkbox" 
                        name="days"
                        value="lunes"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="mr-3" for="days">Tu
                      <input 
                        type="checkbox" 
                        name="days"
                        value="martes"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">W
                      <input 
                        type="checkbox" 
                        name="days"
                        value="miercoles"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">Th
                      <input 
                        type="checkbox" 
                        name="days"
                        value="jueves"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">F
                      <input 
                        type="checkbox" 
                        name="days"
                        value="viernes"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange}
                      />
                    </label>
                    <label className="mr-3" for="days">Sa
                      <input 
                        type="checkbox" 
                        name="days"
                        value="sabado"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange} 
                      />
                    </label>
                    <label className="mr-3" for="days">Su
                      <input 
                        type="checkbox" 
                        name="days"
                        value="domingo"
                        // value={rutina ? rutina.days : ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </label>
              </Col>
            </Row>

            <label className="mb-0">What exercises:</label>
            <Multiselect
              isObject={false}
              onKeyPressFn={function noRefCheck(){}}
              onRemove={function noRefCheck(){}}
              onSearch={function noRefCheck(){}}
              onSelect={function noRefCheck(){}}
              placeholder="Choose your exercises"
              options={exercises.map(item => (item.title))}
              // name={ejercicio seleccionado} // buscar cómo guardar varios ejercicios en un array
              value={rutina && rutina.exercises}
              onChange={handleChange}
            /><br />

            <label className="mb-0">Cardio:</label>
            <input 
              className="label-control"
              type="text" 
              name="cardio"
              placeholder="Ej: 120’’ prank call + 6x (30’’ sprint + 90’’ walk)"
              value={selectRoutine && selectRoutine.cardio} 
              onChange={handleChange} 
            /><br />

            <Row className="label-group">
              <Col>
                <label>Difficulty level: 
                  <input 
                    list="level"
                    className="label-control"
                    name="level" 
                    value={selectRoutine && selectRoutine.level} 
                    onChange={handleChange} 
                  />
                  <datalist id="level">
                    <option value="Easy" />
                    <option value="Medium" />
                    <option value="Hard" />
                    {/* <option value="🟢" />
                    <option value="🟡" />
                    <option value="🔴" /> */}
                  </datalist>
                </label>
              </Col>
              <Col>
                <label className="mb-0">Image:
                  <input 
                    className="label-control" 
                    type="file" 
                    name="pic" 
                    value={selectRoutine && selectRoutine.pic} 
                    onChange={handleChange}
                  /><br />
                </label>
              </Col>
            </Row>
            
            <Row>
              <label>Notes:
                <textarea 
                  className="label-control" 
                  name="notes" 
                  placeholder="Enter some indications if needed..."
                  value={selectRoutine && selectRoutine.notes} 
                  onChange={handleChange}
                />
              </label>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>patchRoutine()}>Save</button>
          <button className="btn btn-danger" onClick={()=>setEditModal(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>

      {/* ---------Delete modal confirmation----------- */}
      <Modal show={deleteRoutineModal}>
        <Modal.Body>
          <p>You are about to delete <b>{rutina && rutina.title}</b> ? </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={()=>deleteRoutine()}>Yes</button>
          <button className="btn btn-secondary" onClick={()=>setDeleteRoutineModal(false)}>No</button>
        </Modal.Footer>
      </Modal>

      <Container className="d-flex justify-content-between py-4">
        <h1>Routines</h1>
        <button 
          className="btn btn-success mr-5 material-icons" 
          onClick={()=>setOpenModal(true)}
          style={{
            borderRadius: "50%",
            height: "60px",
            width: "60px",
            boxShadow: "2px 2px 2px grey"
          }}
        >add
        </button>
      </Container>

      <table className="table table-striped ml-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Group class</th>
            {/* <th scope="col">Equipment</th> */}
            <th scope="col">Level</th>
            <th scope="col">Complement</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <th scope="row">{"🏁"}</th> 
              <td>{item.title}</td>
              <td>
                <img 
                  src={item.pic} 
                  alt="image icon"
                  style={{
                    height: "40px",
                    width: "40px"
                  }} 
                />
              </td>
              <td>{item.group}</td>
              {/* <td>{item.equipment}</td> */}
              <td>{item.level}</td>
              <td>{item.cardio}</td>
              <td>
                <button className="btn btn-secundary material-icons-outlined" onClick={()=>selectRoutine(item, "assign")}>send</button>
                <button className="btn btn-primary material-icons-outlined ml-2" onClick={()=>selectRoutine(item, "details")}>edit</button>
                <button className="btn btn-danger material-icons-outlined ml-2" onClick={()=>selectRoutine(item, "delete")}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Routines;
