// react
import { useState } from 'react'
// components
import Button from '../../components/button/button.component'
import FormInput from '../../components/form-input/form-input.component'
import PopupWindow from '../../components/popup-window/popup-window.component'
// styles
import './subscriptions.styles.scss'

const defaultFormFields = {
  email: '',
}

const Subscription = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [popupTrigger, setPopupTrigger] = useState(false);

  const { email } = formFields;

  const handleSubmit = (event) => {
    event.preventDefault();
    setPopupTrigger(true);
    resetFields()
  }

  const resetFields = () => setFormFields(defaultFormFields)

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  return (
    <section className="subscribe-container">
      <header className="subscribe-name">
        <h3>Subscribe to our newsletter</h3>
      </header>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <FormInput className='subscribe-input' id="email" forLabel="email" label="Company email address" type="email" required onChange={handleChange} name="email" value={email} />
        <Button type='submit' children='Subscribe' buttonType='subscribe' />
      </form>
      <div className="subscribe-afterwords">
        <p>
          Chupa chups gummi bears shortbread candy
        </p>
      </div>
      <PopupWindow trigger={popupTrigger} setPopupTrigger={setPopupTrigger}>
        <h2>Subscribe</h2>
        <h3>Thanks for the subscription</h3>
      </PopupWindow>
    </section>
  )
}

export default Subscription

