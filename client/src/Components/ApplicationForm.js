import { useReducer } from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import TimePicker from 'react-time-picker';

// const initialState = {
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

// const reducer = (state, { field, value }) => {
//     return {
//         ...state,
//         [field]: value
//     }
// }

const ApplicationForm = () => {

    // const [state, dispatch] = useReducer(reducer, initialState);

    // const { firstname, lastname, email, phone, branch, regno, block, room,
    //     address1, address2, city, formState, zip, description, fromDate,
    //     fromTime, toDate, toTime } = state;

    // const onChange = (e) => {
    //     dispatch({ field: e.target.name, value: e.target.value })
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const outpass = {
    //         firstname: state.firstname, lastname: state.lastname, email: state.email, phone: state.phone,
    //         branch: state.branch, regno: state.regno, block: state.block, room: state.room, address1: state.address1,
    //         address2: state.address2, city: state.city, formState: state.formState, zip: state.zip, description: state.description,
    //         fromDate: state.fromDate, fromTime: state.fromTime, toDate: state.toDate, toTime: state.toTime
    //     }

    //     console.log(outpass);

    //     axios.post('http://localhost:5000/outpass/add', outpass)
    //         .then(res => console.log(res.data));

    //     // dispatch({
    //     //     firstname: '', lastname: '', email: '', phone: '',
    //     //     branch: '', regno: '', block: '', room: '', address1: '',
    //     //     address2: '', city: '', formState: '', zip: '', description: '',
    //     //     fromDate: '', fromTime: '', toDate: '', toTime: ''
    //     // })
    //     window.location.reload();
    // }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/outpass/add', data)
            .then(res => console.log(res.data));
    }

    return (

        <div className="Container my-5">
            <div className="row">
                <h1 className="text-center">Outpass Application</h1>
            </div>
            <div className="container my-5">
                <div className="row">
                    <h3 className="text-center">Student Details</h3>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row my-2">
                            <div className="col">
                                <input className="form-control" placeholder="First name"{...register("firstName")} />
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Last name"{...register("lastName")} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input className="form-control" placeholder="Email" {...register("email")} />
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Phone" {...register("phone")} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input className="form-control" placeholder="Branch" {...register("branch")} />
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Registration Number" {...register("regno")} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input className="form-control" placeholder="Block" {...register("block")} />
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Room Number" {...register("room")} />
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Leave Address</h3>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address 1</label>
                            <input className="form-control" id="inputAddress" placeholder="1234 Main St" {...register("address1")} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register("address2")} />
                        </div>
                        <div className="row g-3 my-2">
                            <div className="col-sm-7">
                                <input className="form-control" placeholder="City" {...register("city")} />
                            </div>
                            <div className="col-sm">
                                <input className="form-control" placeholder="State" {...register("formState")} />
                            </div>
                            <div className="col-sm">
                                <input className="form-control" placeholder="Zip" {...register("zip")} />
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Reason For Leave</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("description")} ></textarea>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Date and Time</h3>
                        </div>
                        <div className="row g-3">
                            <h5 className="col-sm-1">From </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="From Date" {...register("fromDate")} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Time" {...register("fromTime")} />
                            </div>
                            <h5 className="col-sm-1">To </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="To Date" {...register("toDate")} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Time" {...register("toTime")} />
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