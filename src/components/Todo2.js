import React from 'react'
import EditTodo2 from './EditTodo2'

const Todo2 = () => {
return (
<>
 <div className="container">
  <div className="row">
    <div id='main'className="col-md-12">
      <div className="card card-white">
        <div className="card-body">
            <button
              data-bs-toggle="modal"
              data-bs-target="#addModal"
              type="button"
              className="btn btn-info"> tarefa
            </button>

    <div className="todo-list">
      <div className="todo-item">
        <hr />
        <span>
        <div className="checker" >
              <span className="" >
                <input
                  type="checkbox"
                />
              </span>
        </div>
            &nbsp; abrir vs code<br />
            <i>10/10/2024</i>
          </span>
          <span className=" float-end mx-3">
            <EditTodo2 /></span>
          <button
            type="button"
            className="btn btn-danger float-end">Delete
          </button>
              </div>
              <div className="todo-item">
        <hr />
        <span>
        <div className="checker" >
              <span className="" >
                <input
                  type="checkbox"
                />
              </span>
        </div>
            &nbsp; go home <br />
            <i>10/10/2024</i>
          </span>
          <span className=" float-end mx-3">
            <EditTodo2 /></span>
          <button
            type="button"
            className="btn btn-danger float-end">Delete
          </button>
              </div>
            </div>
          </div>
        </div>

      </div>   {/*and container*/}

    </div>
  </div>

  {/* Modal */}
  <div
   className="modal fade"
   id="addModal"
   tabIndex="-1"
   aria-labelledby="addModalLabel"
   aria-hidden="true">
  <div className="modal-dialog">
  <form className="d-flex">
    <div className="modal-content">
      <div className="modal-header">
  <h5
   className="modal-title"
   id="addModalLabel">
   Add Todo
  </h5>
  <button
     type="button"
     className="btn-close"
     data-bs-dismiss="modal"
     aria-label="Close">
  </button>
  </div>
  <div className="modal-body">
    <input
      type="text"
      className="form-control"
      placeholder="Add a Todo"
    />
  </div>
  <div className="modal-footer">
  <button
    className="btn btn-secondary"
    data-bs-dismiss="modal">Close
  </button>

  <button className="btn btn-primary">Create Todo</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</>
  )
}
export default Todo2