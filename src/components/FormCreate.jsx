import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Form = ({ formValues, onSubmitForm }) => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        if (formValues) {
            setName(formValues.name);
            setAge(formValues.age);
        }
    }, [formValues]);

    const btnBack = () => {
        router.back();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, age };
        onSubmitForm(formData);
    };
    return (
        <div className=" flex md:container md:mx-auto  lg:container lg:w-1/2 h-[calc(100vh-4rem)] mt-14  justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className=" bg-zinc-50 container p-12 mx-7">
                <label htmlFor='name' className="text-terciario font-bold text-xl  ">Name</label>
                <input
                    className="shadow-lg shadow-slate-500 appearance-none border border-green-700 rounded p-2 mb-4 w-full text-black  bg-inputx"
                    type="text"
                    id='name'
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='edad' className="text-terciario font-bold text-xl">Edad</label>
                <input
                    className="shadow-lg shadow-slate-500 appearance-none border border-green-700 rounded p-2 mb-4 w-full text-black  bg-inputx"
                    type="text"
                    id="edad"
                    placeholder="Edad"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <div className=" flex justify-between mt-4">

                    <button className='shadow-lg shadow-indigo-600  bg-blue-500 hover:bg-blue-700 py-2 px-6 text-white font-bold rounded'>
                        Save
                    </button>
                    <button
                        onClick={btnBack}
                        type="button"
                        className="shadow-lg shadow-indigo-600  bg-no   hover:scale-105 transition-all py-2 px-6 text-white font-bold rounded">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Form;
