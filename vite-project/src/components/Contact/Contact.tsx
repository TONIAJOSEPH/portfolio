import "./Contact.css"
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"

interface formData {
    name: string;
    email: string;
    message: string;
    subject: string
}
const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email must be valid"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
}).required();
const Contact: React.FC = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(schema),
        mode: "onTouched"
    });

    const onSubmit: SubmitHandler<formData> = async(data) => {
        await axios.post('http://localhost:5000/api/senddata',data)
        .then(response=>{
            console.log("")
        })
        reset()
    };
    return (
        <div className="contactWrapper" id="contact">
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Contact</h1>
                    <p className="text-center mt-2 subTitle">Feel free to reach out to me for any questions or opportunities!</p>
                    <div className="col-md-12 mt-5 d-flex justify-content-center align-items-center">
                        <div className="contact">
                            <h3>Email Me</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Email" type="text" className={`mt-4 ${errors.email ?"errorInput":""}`}  {...register("email", { required: true, maxLength: 20 })} />
                                {errors.email && (
                                    <p className="error-message mt-3">{errors.email.message}</p>
                                )}
                                <input placeholder="Name" type="text" className={`mt-4 ${errors.name ?"errorInput":""}`}  {...register("name", { required: true })} />
                                {errors.name && (
                                    <p className="error-message mt-3">{errors.name.message}</p>
                                )}
                                <input placeholder="Subject" type="text" className={`mt-4 ${errors.subject ?"errorInput":""}`}  {...register("subject", { required: true })} />
                                {errors.subject && (
                                    <p className="error-message mt-3">{errors.subject.message}</p>
                                )}
                                <textarea placeholder="Message" className={`mt-4 ${errors.message ?"errorInput":""}`}  {...register("message", { required: true })} />
                                {errors.message && (
                                    <p className="error-message mt-3">{errors.message.message}</p>
                                )}
                                <button className="submitButton">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;