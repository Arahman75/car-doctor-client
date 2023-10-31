import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    return (
        <div>
            <h3>Booking Services: {title}</h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block" type="submit" value="Submit" />
                    {/* <button className="btn btn-primary">Login</button> */}
                </div>
            </form>
        </div>

    );
};

export default CheckOut;