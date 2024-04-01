import React,  { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const Form = ({ formValues, onSubmitForm }) => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    useEffect(() => {
        if (formValues) {
            setName(formValues.name)
            setAge(formValues.age)
        }
    }, [formValues])

    const btnBack = () => {
        router.back()
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        const formData = {name, age}
        onSubmitForm(formData)
    }
    return (
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
            <input className=" border border-zinc-950 px-8 py-2"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input className=" border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Edad"
                value={age}
                onChange={(e) => setAge(e.target.value)}

            />
            <button className="hover:bg-green-400  p-3  px-6 font-bold bg-green-500 rounded-lg">Save</button>
            <button onClick={btnBack} type="button" className="hover:bg-red-600  p-3  px-6 font-bold bg-red-400">Cancel</button>
        </form>
    )
}
export default Form