import * as React from "react";
import { useForm } from "react-hook-form";
import './reactive.css';
import {formTemplates} from '../../utils/constants';

export default function ReactiveForm() {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = (data: any) =>{
    //  alert(JSON.stringify(data));
     console.log(errors);
    };

  const renderFields=()=>{
    return formTemplates.map((item:any)=>{
      let {name, type, label, validationProps, placeholder} = item;
      switch(type){
        case 'text':
          return(
            <div key={name} className="formItem">
                <label>{label}</label>
                <input type="text" name={name} id={name} ref={register({
                  required: validationProps.required,
                  pattern: validationProps?.pattern
                })} placeholder={placeholder} />
                {errors[name] && <span className="errorMessage">{errors[name]['message']}</span>}
            </div>
          )
        case 'number':
          return(
            <div key={name} className="formItem">
                <label>{label}</label>
                <input type="number" name={name} id={name} ref={register({
                  required: validationProps.required
                })} placeholder={placeholder} />
                {errors[name] && <span className="errorMessage">{JSON.stringify(errors[name].type)}</span>}
            </div>
          )
        case 'email':
        return(
            <div key={name} className="formItem">
                <label>{label}</label>
                <input type="email" name={name} id={name} ref={register({
                  required: validationProps.required,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })} placeholder={placeholder} />
                {errors[name] && <span className="errorMessage">{errors[name]['message']}</span>}
            </div>
          )
      }
     
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          {renderFields()}
          <button type="button" onClick={(e)=>onSubmit(e)}>click</button>
          <input type="submit" />
    </form>
  );
}
