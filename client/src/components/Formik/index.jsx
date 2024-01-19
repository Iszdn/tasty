import React from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const FormAdd = ({getData}) => {

    async function addMenu(values) {
        const res=await axios.post("http://localhost:8000/",values) 
        getData()
    }

    return (
        <div className='addForm'>
            <Formik
                initialValues={{ image: '', title: '', desc: '', price: '' }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Required'),
                    title: Yup.string()
                        .required('Required'),
                    desc: Yup.string().required('Required'),
                    price: Yup.number().positive("number must be positive!").required('Required')
                })}
                onSubmit={(values, { resetForm }) => {
                    addMenu(values)
                   resetForm()
                }}
            >
                <Form>
                    <label htmlFor="image">image</label>
                    <Field name="image" type="text" />
                   <div className="red"> <ErrorMessage name="image" /></div>

                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" />
                    <div className="red"> <ErrorMessage name="image" /></div>

                    <label htmlFor="desc">Description</label>
                    <Field name="desc" type="text" />
                    <div className="red"> <ErrorMessage name="image" /></div>

                    
                    <label htmlFor="price">Price</label>
                    <Field name="price" type="text" />
                    <div className="red"> <ErrorMessage name="price" /></div>

                    <button className='btn' type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormAdd


