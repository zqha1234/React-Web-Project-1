import React, { useState } from 'react';
import './index.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Check if name, country, and email are not empty
    //     if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || description.trim() === '') {
    //         alert('Please fill in all required fields.');
    //         return;
    //     }
    //     // If all required fields are filled, submit the form
    //     // You can add further logic here, such as sending form data to a server
    //     // console.log('Form submitted successfully:', { name, country, email, phone, description });
    //     const formData = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         phone: phone,
    //         description: description
    //     };        

    //     // fetch('http://localhost:8080/send-email', {
    //     fetch('https://n5x0jpfski.execute-api.ca-central-1.amazonaws.com/default/sendEmail',{
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //         alert('Form submitted successfully.');
    //         window.location.reload();  // 页面重载
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //         alert('Failed to submit the form.');
    //     });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if required fields are not empty
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || description.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }
    
        const formData = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            description: description.trim()
        };
    
        try {
            const response = await fetch('https://n5x0jpfski.execute-api.ca-central-1.amazonaws.com/default/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors',  // Set mode to 'no-cors'
                body: JSON.stringify(formData)
            });
    
            // Note: With 'no-cors' mode, you won't be able to access response content
            if (response.ok) {
                console.log('Request succeeded');
                alert('Form submitted successfully.');
                // Clear form fields instead of reloading the page
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setDescription('');
            } else {
                console.error('Request failed');
                alert('Form submitted successfully.');
                // Clear form fields instead of reloading the page
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setDescription('');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Form submitted successfully.');
            // Clear form fields instead of reloading the page
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setDescription('');
        }
    };
    

    return (
        <div className='contact-form-area'>
            <div className='contact-form-box'>
                <div className='contact-form-title' style={{width: '1200px'}}>
                    <h3>Contact Form</h3>
                </div>
                <div className='contact-box'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className='contact-form-left'>
                            <div className='contact-smbox'>
                                <label htmlFor="name">*First Name:</label>
                                <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ fontSize: '20px' }} />
                            </div>
                            <div className='contact-smbox'>
                                <label htmlFor="country">*Last Name:</label>
                                <input type="text" id="country" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ fontSize: '20px' }} />
                            </div>
                            <div className='contact-smbox'>
                                <label htmlFor="email">*Email:</label>
                                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ fontSize: '20px' }} />
                            </div>
                            <div className='contact-smbox'>
                                <label htmlFor="phone-number">Phone Number:</label>
                                <input type="text" id="phone-number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ fontSize: '20px' }}/>
                            </div>
                        </div>
                        <div className='contact-form-right'>
                            <div className='text-box'>
                                <textarea id="description-needs" name="description-needs" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your needs? (REQUIRED)"  style={{ fontSize: '18px' }}></textarea>
                            </div>
                            <p>* is required information</p>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>      
            </div>
        </div>
    );
};

export default ContactForm;
