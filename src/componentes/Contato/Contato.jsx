import { useState } from 'react';
import './contato.scss';
import emailjs from 'emailjs-com';



export default function Contato() {

    const[message,setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true)

        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_k7zpky5', e.target, 'user_a21s4m6GM72h1lHkFGFdn')
      .then((result) => {
          alert("Enviado com sucesso!")
      }, (error) => {
          alert(error.message)
      });
      e.target.reset()
    }

    return (
        
        <div className="contato" id="contato">
           <div className="left">
               <img src={require("../../assets/shakehands.png")} alt="" />
           </div>
            <div className="right">
                <h2>Contato.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' name="email" />
                    <textarea placeholder='Mensagem' name="message"></textarea>
                    <button type='submit'>Enviar</button>
                    {message && <span>Obrigado, entrarei em contato!</span>}
                </form>
            </div>
        </div>
    )
}
 