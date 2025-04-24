import React, { useState } from 'react';
import "./Insert.css";

function InsertDog() {
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const addDog = {
            breed,
            description
        }

        await fetch('http://localhost:8081/dogs/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addDog),
        });

        console.log("success");
        window.location.reload(); // Reload the page after successful form submission
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-8-text-success">
                    <div className='container'>
                        <h5 className="mt-3 mb-3 text-white">
                            Add dogs
                        </h5>
                        <form className='row' onSubmit={handleFormSubmit}>
                            <div className="col-md-3">
                                <label className="form-label text-white">Breed</label>
                                <input type="text" name='description' value={breed} onChange={(e) => setBreed(e.target.value)} className='form-control' placeholder='Breed...' />
                            </div>
                            <div className="col-md-3">
                                <h5>Description</h5>
                                <div className="form-control-insert">
                                    <input type="textarea" name='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description...' />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className='form-control-btn-success'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InsertDog;