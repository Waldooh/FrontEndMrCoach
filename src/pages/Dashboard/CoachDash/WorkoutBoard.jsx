import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import '../../../styles/ModalForm.scss';


const Exercises = () => {

  const [data, setData] = useState([]);
  
  const getWorkout = async () => {
    await fetch("https://api.mrcoach.mx/workout/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
    })
    .then((result) => result.json())
    .then((json) => {
      setData(json.payload.allExercises)
    })
  };
  useEffect(() => {
    getWorkout()
  }, []);

  const postWorkout = async () => {
    await fetch("https://api.mrcoach.mx/workout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
      body: JSON.stringify(ejercicio)
    })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(result => {
      if(result.ok) {
        console.log(result)
        setData(data.concat(result.payload))
        setModalAdd(false)
      } else { alert("Ups, algo falló en el post") }
    });
  };

  const patchWorkout = async () => {
    await fetch(`https://api.mrcoach.mx/workout/${ejercicio._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
      body: JSON.stringify(ejercicio)
    })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(item => {
      console.log("item",item)
      let newData = data;
      newData.map(item => {
        if(ejercicio._id === item._id) {
          item.title = ejercicio.title;
          item.img = ejercicio.img;
          item.muscle = ejercicio.muscle;
          item.reps = ejercicio.reps;
          item.equipment = ejercicio.equipment;
          item.link = ejercicio.link
        }
        return newData;
      })
      setData(newData);
      setShowModal(false);
    });
  };

  const deleteWorkout = async () => {
    await fetch(`https://api.mrcoach.mx/workout/${ejercicio._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("jwt")
      },
    })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(item => {
      setData(data.filter(item => item._id !== ejercicio._id));
      console.log("item",item)
      setModalDelete(false);
    })
  };

  const [showModal, setShowModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const [ejercicio, setEjercicio] = useState({
    _id: "",
    title: "",
    img: "",
    muscle: "",
    reps: "",
    rest: "",
    equipment: "",
    link: "",
  });


  const selectWorkout = (item, action) => {
    setEjercicio(item);
    (action === "details") ? setShowModal(true) : setModalDelete(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEjercicio({ ...ejercicio, [name]: value });
  };

  const openAddModal = () => {
    setEjercicio(null);
    setModalAdd(true);
  };

  return (
    <div>
      <Container className="d-flex justify-content-between py-4">
        <h1>Exercises</h1>
        <button 
          className="btn btn-success mr-3 material-icons" 
          onClick={()=>openAddModal()}
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
            <th scope="col">Name</th>
            <th scope="col">Img</th>
            <th scope="col">Muscle</th>
            <th scope="col">Equipment</th>
            <th scope="col">Reps</th>
            <th scope="col">Rest</th>
            <th scope="col">Reference</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <th scope="row">{"🎯"}</th>
              <td>{item.title}</td>
              <td>
                <img 
                  src={item.img} 
                  alt="image icon" 
                  style={{
                    height: "40px",
                    width: "40px", 
                  }}
                />
              </td>
              <td>{item.muscle}</td>
              <td>{item.equipment}</td>
              <td>{item.reps}</td>
              <td>{item.rest}</td>
              <td>{item.link}</td>
              <td>
                <button className="btn btn-primary material-icons-outlined" onClick={()=>selectWorkout(item, "details")}>edit</button>
                <button className="btn btn-danger material-icons-outlined ml-2" onClick={()=>selectWorkout(item, "delete")}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ---------Edit modal----------- */}
      <Modal show={showModal}>
        <Modal.Header>
          <h3>Exercise Details</h3>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="label-group">
              <label className="mb-0">Workout name:
                <input 
                  className="label-control" 
                  type="text" 
                  name="title" 
                  value={selectWorkout && selectWorkout.title} 
                  onChange={handleChange}
                /><br />
              </label>
              <label className="mb-0">{"Muscle(s):"}
                <input 
                  className="label-control" 
                  type="text" 
                  name="muscle" 
                  value={selectWorkout && selectWorkout.muscle} 
                  onChange={handleChange}
                /><br />
              </label>
            </div>
            <div className="label-group">
              <label className="mb-0">Reps:
                <input 
                  className="label-control" 
                  type="text" 
                  name="reps"
                  value={selectWorkout && selectWorkout.reps} 
                  onChange={handleChange}
                /><br />
              </label>
              <label className="mb-0">Image:
                <input 
                  className="label-control" 
                  type="text" 
                  name="img" 
                  value={selectWorkout && selectWorkout.img} 
                  onChange={handleChange}
                /><br />
              </label>
            </div>
            <div className="label-group">
              <label className="mb-0">Equipment:
                <input 
                  className="label-control" 
                  type="text" 
                  name="equipment"
                  value={selectWorkout && selectWorkout.equipment} 
                  onChange={handleChange}
                /><br />
              </label>
              <label className="mb-0">Reference:
                <input 
                  className="label-control" 
                  type="text" 
                  name="link" 
                  value={selectWorkout && selectWorkout.link} 
                  onChange={handleChange}
                /><br />
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>patchWorkout()}>Save</button>
          <button className="btn btn-danger" onClick={()=>setShowModal(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>

      {/* ---------Delete confirmation----------- */}
      <Modal show={modalDelete}>
        <Modal.Body>
          <p>You are about to delete <b>{ejercicio && ejercicio.title}</b> ? </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={()=>deleteWorkout()}>Yes</button>
          <button className="btn btn-secondary" onClick={()=>setModalDelete(false)}>No</button>
        </Modal.Footer>
      </Modal>

      {/* -----------New Workout-------------- */}
      <Modal show={modalAdd}>
        <Modal.Header>
          <h3>New Exercise</h3>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="label-group">
              <label className="mb-0">Exercise name:
                <input 
                  className="label-control" 
                  type="text" 
                  name="title" 
                  value={ejercicio ? ejercicio.title : ""} 
                  onChange={handleChange}
                /><br />
              </label>
              <label className="mb-0">{"Target muscle(s):"}
                <input 
                  className="label-control" 
                  type="text" 
                  name="muscle" 
                  value={ejercicio ? ejercicio.muscle : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </div>
            <div className="label-group">
              <label className="mb-0">Reps:
                <input 
                  className="label-control" 
                  type="text" 
                  name="reps"
                  placeholder="12-12-10-8"
                  value={ejercicio ? ejercicio.reps : ""}
                  onChange={handleChange}
                /><br />
              </label>
              <label className="mb-0">Rests:
                <input 
                  className="label-control" 
                  type="text" 
                  name="rest" 
                  placeholder={`60"`}
                  value={ejercicio ? ejercicio.rest : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </div>
            <label className="mb-0">Image:
              <input 
                className="label-control" 
                type="file" 
                name="img" 
                value={ejercicio ? ejercicio.img : ""}
                onChange={handleChange}
              /><br />
            </label>
            <div className="label-group">
              <label className="mb-0">Equipment:
                <input 
                  className="label-control" 
                  type="text" 
                  name="equipment" 
                  placeholder="Enter equipment"
                  value={ejercicio ? ejercicio.equipment : ""}
                  onChange={handleChange}
                /><br />
              </label>
              <label className="mb-0">"Reference:"
                <input 
                  className="label-control" 
                  type="text" 
                  name="link" 
                  value={ejercicio ? ejercicio.link : ""}
                  onChange={handleChange}
                  placeholder="Add a reference link"
                /><br />
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>postWorkout()}>Add +</button>
          <button className="btn btn-danger" onClick={()=>setModalAdd(false)}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Exercises;
