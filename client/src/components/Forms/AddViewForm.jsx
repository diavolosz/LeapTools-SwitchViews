
import '../../styles/Forms/AddViewForm.scss'

import { useControlledForm } from '../../hooks/useControlledForm'
import { ArrowArcLeft } from 'phosphor-react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AddViewForm(props) {

  const {
    resetForm,
    data,
    setData,
    currentItemIndex,
    setCurrentItemIndex } = props

  const [formValues, parsedFormData, handleInput, errors] = useControlledForm([
    {
      name: "imageUrl",
      placeholder: "IMAGE URL",
      required: true,
    },
    {
      name: "location",
      placeholder: "ROOM LOCATION",
    },
    {
      name: "floorType",
      placeholder: "FLOOR TYPE",
      required: true,
    },
    {
      name: "wallType",
      placeholder: "WALL TYPE",
      required: true,
    },
  ]);


  const inputFields = formValues.map((formInput) => {
    const { name, placeholder, type, required, value } = formInput;

    return (
      <input className="form-input"
        {...{
          key: name,
          name,
          value: value,
          placeholder,
          onChange: handleInput,
          type,
          required,
        }}
      />
    );
  });

  // submit will update current data set and automatically scroll to new item 
  const onSubmit = event => {
    event.preventDefault();
    setData(prev => (
      [...prev, {
        image: formValues[0].value,
        location: formValues[1].value,
        floorType: formValues[2].value,
        wallType: formValues[3].value,
      }]
    ))

    const scrollRightOnUpdate = () => {
      setCurrentItemIndex(currentItemIndex + 1)
      let elem = document.getElementById("scroll-target")
      elem.scrollBy({ left: (window.innerWidth * 0.85), behavior: 'smooth' })
    }
    setTimeout(scrollRightOnUpdate, 700)
    
    resetForm()
  };


  return (
    <section className='add-view-form-container'>
      <div className='add-view-form-inner-wrapper'>
        <form className="add-view-form" onSubmit={onSubmit}>
          <ArrowArcLeft className='icon' size={30} onClick={() => resetForm()} />
          {inputFields}
          <input className="form-submit" type="submit" value="ADD VIEW" />
        </form>
      </div>

    </section>
  )
}