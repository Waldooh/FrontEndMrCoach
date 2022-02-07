import React from 'react'

const Pupils = () => {
  return (
    <div>
      <h1>Pupils</h1>
      <table className="table table-striped ml-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Img</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Level</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>😻</td>
            <td>mark19@gmail.com</td>
            <td>Male</td>
            <td>🌋🌋🌋</td>
            <td>
              <button>Inspect</button>
              <button>🗑️</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>👨‍🚀</td>
            <td>fat@hotmail.com</td>
            <td>Other</td>
            <td>🦓🦓</td>
            <td>
              <button>Inspect</button>
              <button>🗑️</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>🦅</td>
            <td>123abc@twitter.com</td>
            <td>Male</td>
            <td>🧟🧟🧟</td>
            <td>
              <button>Inspect</button>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pupils;
