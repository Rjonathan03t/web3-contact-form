'use client'
import { useForm } from 'react-hook-form';
import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name:z.string(),
    email:z.string().email(),
    number:z.number()
})

export default function Contact() {

    interface formData {
        name: string,
        email: string,
        number: number
    }

    const form = useForm<formData>({
           defaultValues:{
            name:'',
            email:'',
            number:0
           },
           resolver: zodResolver(schema),
    });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState

    const onSubmit = (data: formData) => {
        console.log('form submitted', data)
    }
    return (
        <div>
            <h1 className='text-center text-4xl mt-10'> Contact Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center mt-16 gap-5' noValidate>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "name is required"
                        }
                    })}
                    className='text-black pl-2' />
                <p className='text-red-600'>{errors.name?.message}</p>

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "email is required"
                        }
                    })}
                    className='text-black pl-2' />
                <p className='text-red-600'>{errors.email?.message}</p>

                <label htmlFor="number">Number</label>
                <input
                    type="text"
                    id="number"
                    {...register("number", {
                        required: {
                            value: true,
                            message: "number is required"
                        }
                    })}
                    className='text-black pl-2' />
                <p className='text-red-600'>{errors.number?.message}</p>

                <button type="submit" className='mt-8 bg-orange-200 text-black rounded py-2 px-5'>Submit</button>
            </form>
           
        </div>
    )
}