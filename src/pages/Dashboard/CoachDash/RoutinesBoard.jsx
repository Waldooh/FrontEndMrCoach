import React from 'react'

const Routines = () => {

  return (
    <div>
      <h1>Routines</h1>
      <table className="table table-striped ml-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Discipline</th>
            <th scope="col">Equipment</th>
            <th scope="col">Sessions</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Rapid weight loss</td>
            <td>💢</td>
            <td>Crossfit</td>
            <td>Rings</td>
            <td>15</td>
            <td>
              <button>Details</button>
              <button>Assign</button>
              <button>🗑️</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Muscle up</td>
            <td>👨‍🚀</td>
            <td>Crossfit</td>
            <td>Bands</td>
            <td>22</td>
            <td>
              <button>Details</button>
              <button>Assign</button>
              <button>🗑️</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Killer abs</td>
            <td>🦅</td>
            <td>Crossfit</td>
            <td>None</td>
            <td>30</td>
            <td>
              <button>Details</button>
              <button>Assign</button>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Routines;
