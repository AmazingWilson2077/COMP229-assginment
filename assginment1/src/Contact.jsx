// Contact.js
// Zhaolong cao wilson id 301425252
import React from 'react';

function Contact() {
    return (
        <div className="container-fluid mt-4" style={{ marginTop: '10000px' }}>
            <div className="row justify-content-center flex-column align-items-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Contact Information
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td>Zhaolong Cao</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email:</th>
                                    <td>ggpeal@gmail.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone:</th>
                                    <td>437-340-5104</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address:</th>
                                    <td>937 progress avenue</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Contact Form
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName"
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                                    <input type="text" className="form-control" id="contactNumber" name="contactNumber"
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" name="email" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="3"
                                              required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contact;
