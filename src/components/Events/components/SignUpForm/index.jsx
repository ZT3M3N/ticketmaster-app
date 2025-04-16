import React, { useState } from "react";

const SignUpForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");

    const handleClearClick = () => {
        setName("");
        setAge("");
        setAddress("");
        setZipCode("");
        setPhone("");
        console.log("Formulario limpiado")
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("submit: ", {
            name,
            age,
            address,
            zipCode,
            phone,
        });
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <label>
                Name: <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Age: <input value={age} onChange={(e) => setAge(e.target.value)} required />
            </label>
            <br />
            <label>
                Address <input value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <br />
            <label>
                ZipCode <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
            </label>
            <br />
            <label>
                Phone <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignUpForm;
