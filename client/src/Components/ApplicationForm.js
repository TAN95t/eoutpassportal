import { useReducer } from "react";
import axios from 'axios';
// const state = {
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     branch: '',
//     regno: '',
//     block: '',
//     room: '',
//     address1: '',
//     address2: '',
//     city: '',
//     formState: '',
//     zip: '',
//     description: '',
//     fromDate: '',
//     fromTime: '',
//     toDate: '',
//     toTime: '',
// }

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

const ApplicationForm = () => {

    const [state, dispatch] = useReducer(reducer, {
        firstname: '', lastname: '', email: '', phone: '',
        branch: '', regno: '', block: '', room: '', address1: '',
        address2: '', city: '', formState: '', zip: '', description: '',
        fromDate: new Date(), fromTime: '', toDate: new Date(), toTime: ''
    });

    // const { firstname, lastname, email, phone, branch, regno, block, room,
    //     address1, address2, city, formState, zip, description, fromDate,
    //     fromTime, toDate, toTime } = state;

    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const outpass = {
            firstname: state.firstname, lastname: state.lastname, email: state.email, phone: state.phone,
            branch: state.branch, regno: state.regno, block: state.block, room: state.room, address1: state.address1,
            address2: state.address2, city: state.city, formState: state.formState, zip: state.zip, description: state.description,
            fromDate: state.fromDate, fromTime: state.fromTime, toDate: state.toDate, toTime: state.toTime
        }

        console.log(outpass);

        axios.post('http://localhost:5000/outpass/add', outpass)
            .then(res => console.log(res.data));

        dispatch({
            firstname: '', lastname: '', email: '', phone: '',
            branch: '', regno: '', block: '', room: '', address1: '',
            address2: '', city: '', formState: '', zip: '', description: '',
            fromDate: '', fromTime: '', toDate: '', toTime: ''
        })
    }

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
                    <form onSubmit={onSubmit}>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" name="firstname" value={state.firstname} onChange={onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" name='lastname' value={state.lastname} onChange={onChange} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Email" name='email' value={state.email} onChange={onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" name='phone' value={state.phone} onChange={onChange} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Branch" aria-label="Branch" name='branch' value={state.branch} onChange={onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Registration Number" aria-label="Registration Number" name='regno' value={state.regno} onChange={onChange} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Block" aria-label="Block" name='block' value={state.block} onChange={onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Room Number" aria-label="Room Number" name='room' value={state.room} onChange={onChange} />
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Leave Address</h3>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address 1</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='address1' value={state.address1} onChange={onChange} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='address2' value={state.address2} onChange={onChange} />
                        </div>
                        <div className="row g-3 my-2">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" placeholder="City" aria-label="City" name='city' value={state.city} onChange={onChange} />
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="State" aria-label="State" name='formState' value={state.formState} onChange={onChange} />
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="Zip" aria-label="Zip" name='zip' value={state.zip} onChange={onChange} />
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Reason For Leave</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='description' value={state.description} onChange={onChange}></textarea>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Date and Time</h3>
                        </div>
                        <div className="row g-3">
                            <h5 className="col-sm-1">From </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="From Date" aria-label="From Date" name='fromDate' value={state.fromDate} onChange={onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Time" aria-label="From Time" name='fromTime' value={state.fromTime} onChange={onChange} />
                            </div>
                            <h5 className="col-sm-1">To </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="To Date" aria-label="To Date" name='toDate' value={state.toDate} onChange={onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Time" aria-label="To Time" name='toTime' value={state.toTime} onChange={onChange} />
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto my-4">
                            <input className="btn btn-primary" type="submit" value='Submit Application' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm
