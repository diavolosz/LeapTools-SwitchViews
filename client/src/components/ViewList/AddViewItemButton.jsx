

import { Plus } from "phosphor-react"
import { useState } from "react"

import AddViewForm from "../Forms/AddViewForm"

export default function AddViewItemButton(props) {

  const { form, setForm, data, setData, currentItemIndex, setCurrentItemIndex } = props



  const handleForm = () => {
    setForm(true)
  }

  const resetForm = () => {
    setForm(false)
  }

  return (
    <div className='add-view-button'>
      <Plus className='icon' size={60} onClick={() => handleForm()} />

      {form &&
        <AddViewForm
          data={data}
          setData={setData}
          resetForm={resetForm}
          setCurrentItemIndex={setCurrentItemIndex}
          currentItemIndex={currentItemIndex}
        />
      }
    </div>
  )
}