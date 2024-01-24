import React from 'react';

function AddEmployee() {
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">+ADD</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='mb-2' style={{ height: " 100%", width: "100%" }}>
                  <select name="" id="" className='form-control'>
                    <option value="">Select Department</option>
                  </select>

                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Name' />
                </div>
                <div className="mb-2">
                  <select name="" id=""className='form-control' >
                    <option value="">Select Access</option>
                  </select>

                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>




    </>
  );
}

export default AddEmployee;
