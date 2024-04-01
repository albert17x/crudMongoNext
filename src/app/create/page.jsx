"use client";
import Form from "@/components/FormCreate";
import { useRouter } from "next/navigation";

const uri = "http://localhost:3000/api/student";
const Creacion = () => {
    const router = useRouter();
    const onSubmitCreate = async (formData) => {
        const { name, age } = formData;

        try {
            const response = await fetch(uri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name, age: age }),
            });
            if (response.ok) {
                router.refresh();
                router.push("/");
            } else {
                throw new Error("Fallo al Crear Cheee");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" bg-blue-900 min-w-max h-[calc(100vh)] ">
            <div className=" ">
                <h1 className=" text-white text-center text-4xl  p-4">Formulario Create</h1>
                <Form onSubmitForm={onSubmitCreate} />
            </div>
        </div>
    );
};
export default Creacion;
