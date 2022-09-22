
import '../../styles/Forms/AddViewForm.scss'

import { useControlledForm } from '../../hooks/useControlledForm'
import { ArrowArcLeft } from 'phosphor-react';

export default function AddViewForm(props) {

  const { resetForm, data, setData } = props

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


  const onSubmit = event => {
    event.preventDefault();
    console.log(formValues)
    console.log([... {
      image: formValues[0].value,
      location: formValues[1].value,
      floorType: formValues[2].value,
      wallType: formValues[3].value,
    }])
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