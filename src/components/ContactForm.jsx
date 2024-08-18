import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from 'react-icons/fi';

import { motion } from 'framer-motion'

const ContactForm = () => {
    const formRef = useRef();  // Use useRef to reference the form element

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!formData.message) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.sendForm(
                "service_i7q4zyw",
                "template_neqtt35",
                formRef.current,  // Use formRef here
                "Wy2SjjQrn84kbTr-V"
            )
                .then((response) => {
                    toast.success('Message sent successfully');
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                    toast.error('Failed to send message, please try again later.');
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="p-4 lg:w3/4" id="contact">
            <Toaster />
            <h2 className="my-8 text-center text-4xl font-4xl font-semibold tracking-tighter">Let's Connect</h2>
            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className='space-y-4'
                ref={formRef} onSubmit={handleSubmit}>  {/* Attach ref to form */}
                <div className='mb-4'>
                    <input type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                        className='mb- w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                    />
                    {errors.name && (<p className='text-sm text-rose-800'>{errors.name}</p>)}
                </div>
                <div className='mb-4'>
                    <input type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                    />
                    {errors.email && (<p className='text-sm text-rose-800'>{errors.email}</p>)}
                </div>
                <div className='mb-4'>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        placeholder='Message'
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                        rows="6"
                    />
                    {errors.message && (<p className='text-sm text-rose-800'>{errors.message}</p>)}
                </div>
                <button type='submit' className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""
                    }`} disabled={isSending} >
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send Message"}
                        <FiSend />
                    </div>
                </button>
            </motion.form>
        </div>
    );
}

export default ContactForm;
