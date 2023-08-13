import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'

// Error message -takes care of Field visited an error is there 
//Formik -wrapping entire form under Formik Component -accepts initialValues ,validationSchema and onsubmit handler as props 
//Form-replaces form html tag with the form component  -this will automatically link the onSubmit event witht the formsubmit handler or method passed to the form html element 
//Field-replaces each input field with the Field component ,this field component hooks in to formik using the name attribute ,it will take care of the hndling value ,handling onchange  and onBlur event
//ErrorMessage-for error message we use error message component ,which conditionally renders the error corresponding to a form field ,only if the fiels had been visited and if the error exist 

//Field components additonal points 
//1)Field components will pass through any addtional props that you specify ex-placeholder
//2)ABility to render the different element other than the input element ex-text area field you want to add 
const initialValues={
    name:'khushboo',
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
const CustomInputComponent =
    (props)=>{
    const {field,form:{ touched, errors },meta} = props
        console.log('render props ',props)
        return( <div>

                    <input  type='text' id='address' {...field}/>
                    {touched[field.address] && errors[field.name] ? <div className="text-[red] bg-[red] border-2 border-green-300">{errors[field.name]}</div>: null}
            </div>)
    }

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
             
                 <Field name="address" component={CustomInputComponent} placeholder="address">
                    
                 </Field>
            </div>

            <button type='submit'>Submit</button>
        </Form>


    </Formik>
  )
}
export default YouTubeForm