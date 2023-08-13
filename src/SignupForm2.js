import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'


const initialValues={
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:''
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format ').required('Required'),
    channel: Yup.string().required('Required')

})

function YouTubeForm() {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
        <Form >
            <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name='name'/>
            </div>
            

            <div className='form-control'>
                    <label htmlFor = 'email'>Email</label>
                    <Field type='email' name='email' id='email' />
                    <ErrorMessage name='email'/>

            </div>
            

            <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id="channel" name="channel" placeholder="YouTube Channel Name"/>
                    <ErrorMessage name='channel'/>

            </div>
            <div className='form-control'>
            <label htmlFor='comments'>Comments</label>
     
            <Field id="comments" as="textarea" name='comments'/>  



            </div>
            
            <div className='form-control'>
                <label htmlFor='address'>Address </label>
             
                 <Field name="address">
                    {(
                        (props)=>{
                        const {field,form,meta} = props
                            console.log('render props ',props)
                            return( <div>

                       <input  type='text' id='address' {...field}/>
                    {meta.touched && meta.error ? <div>{meta.error}</div>: null}
                                </div>)
                        }
                   ) }
                 </Field>
            </div>



            <button type='submit'>Submit</button>
        </Form>


    </Formik>
  )
}
export default YouTubeForm