import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    // first step

    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    // useEffect(() => {
    //     axios.get(url, { withCredentials: true })
    //         .then(res => {
    //             setBookings(res.data)
    //         })
    //     // fetch(url)
    //     //     .then(res => res.json())
    //     //     .then(data => setBookings(data)
    //     //     )
    // }, [url]);

    // second step 

    const url = `bookings?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBookings(res.data))
    }, [url, axiosSecure]);

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user confirm successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm';
                    const newBooking = [update, ...remaining];
                    setBookings(newBooking);
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl'>Bookings : {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                booking={booking}
                                key={booking._id}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;