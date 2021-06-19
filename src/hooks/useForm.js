import { useState } from "react";

export default function useForm(formObj) {
    const [form, setForm] = useState(formObj)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
// fn stands for fundtion. we cannot write function as it is a reserved argument
function handleSubmit(fn) {
    return (event) => {
        event.preventDefault()
        fn(form)
    }
    // e.preventDefault()
}


return [form, handleChange, handleSubmit];

}