import { useReducer } from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import TimePicker from 'react-time-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
    const schema = yup.object({
        firstName: yup.string().max(50).required(),
        lastName: yup.string().max(50).required(),
        email: yup.string().email().required(),
        phone: yup.number().min(10).max(10).positive().integer().required(),
        branch: yup.string().max(50).required(),
        regno: yup.number().min(9).max(9).positive().integer().required(),
        block: yup.string().length(2).required(),
        room: yup.number().min(3).max(3).positive().integer().required(),
        address1: yup.string().max(70).required(),
        address2: yup.string().max(70).required(),
        city: yup.string().max(40).required(),
        appFormState: yup.string().max(40).required(),
        zip: yup.number().min(6).max(6).positive().integer().required(),
        description: yup.string().max(100).required(),
        fromDate: yup.date().required(),
        fromTime: yup.string().required(),
        toDate: yup.date().required(),
        toTime: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
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
                                <label className="form-label">First Name : </label>
                                <input className="form-control" placeholder="First name"{...register("firstName")} />
                                <p>{errors.firstName?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Last Name : </label>
                                <input className="form-control" placeholder="Last name"{...register("lastName")} />
                                <p>{errors.lastName?.message}</p>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">Email : </label>
                                <input className="form-control" placeholder="Email" {...register("email")} />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Phone : </label>
                                <input className="form-control" placeholder="Phone" {...register("phone")} />
                                <p>{errors.phone?.message}</p>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">Branch : </label>
                                <input className="form-control" placeholder="Branch" {...register("branch")} />
                                <p>{errors.branch?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Registration no. : </label>
                                <input className="form-control" placeholder="Registration Number" {...register("regno")} />
                                <p>{errors.regno?.message}</p>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">Block : </label>
                                <input className="form-control" placeholder="Block" {...register("block")} />
                                <p>{errors.block?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Room no. : </label>
                                <input className="form-control" placeholder="Room Number" {...register("room")} />
                                <p>{errors.room?.message}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Leave Address</h3>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address 1 : </label>
                            <input className="form-control" id="inputAddress" placeholder="1234 Main St" {...register("address1")} />
                            <p>{errors.address1?.message}</p>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2 : </label>
                            <input className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register("address2")} />
                            <p>{errors.address2?.message}</p>
                        </div>
                        <div className="row g-3 my-2">
                            <div className="col-sm-7">
                                <label className="form-label">City : </label>
                                <input className="form-control" placeholder="City" {...register("city")} />
                                <p>{errors.city?.message}</p>
                            </div>
                            <div className="col-sm">
                                <label className="form-label">State : </label>
                                <input className="form-control" placeholder="State" {...register("appFormState")} />
                                <p>{errors.appFormState?.message}</p>
                            </div>
                            <div className="col-sm">
                                <label className="form-label">Zip : </label>
                                <input className="form-control" placeholder="Zip" {...register("zip")} />
                                <p>{errors.zip?.message}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Reason For Leave</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("description")} ></textarea>
                            <p>{errors.description?.message}</p>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Date and Time</h3>
                        </div>
                        <div className="row g-3">
                            <h5 className="col-sm-1">From </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="From Date" {...register("fromDate")} />
                                <p>{errors.fromDate?.message}</p>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Time" {...register("fromTime")} />
                                <p>{errors.fromTime?.message}</p>
                            </div>
                            <h5 className="col-sm-1">To </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="To Date" {...register("toDate")} />
                                <p>{errors.toDate?.message}</p>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Time" {...register("toTime")} />
                                <p>{errors.toTime?.message}</p>
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