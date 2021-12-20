import React from 'react'

function ApplicationForm() {
    return (
        <div className="Container my-5">
            <div className="row">
                <h1 className="text-center">Outpass Appication</h1>
            </div>
            <div className="container my-5">
                <div className="row">
                    <h3 className="text-center">Student Details</h3>
                </div>
                <div className="row">
                    <form>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Email" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Phone" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Branch" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Registration Number" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Block" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Room Number" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Leave Address</h3>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address 1</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="row g-3 my-2">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" placeholder="City" aria-label="City" />
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="State" aria-label="State" />
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="Zip" aria-label="Zip" />
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Reason For Leave</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Date and Time</h3>
                        </div>
                        <div className="row g-3">
                            <h5 className="col-sm-1">From </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="From Date" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="time" className="form-control" placeholder="Time" aria-label="Last name" />
                            </div>
                            <h5 className="col-sm-1">To </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="To Date" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="time" className="form-control" placeholder="Time" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto my-4">
                            <button className="btn btn-primary" type="button">Submit Application</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm
