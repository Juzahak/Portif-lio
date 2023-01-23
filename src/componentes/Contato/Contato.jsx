import { useState, useRef } from 'react';
import './contato.scss';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { useEffect } from 'react';
export default function Contato() {
    const [message, setMessage] = useState(false)
    const myDivRef = useRef(null);


    const handleSubmit = (e) => {
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

    
    const [questionNumber, setQuestionNumber] = useState(1);
    const [responses, setResponses] = useState({});
    const [pergunta, setPergunta] = useState('');
    
    useEffect(() => {
        myDivRef.current.scrollIntoView({
            behavior: "smooth", block: "end"
        });
    }, [pergunta])
    const handleSubmit2 = (e) => {
        e.preventDefault();
        const input = e.target.elements.response.value;
        setResponses((prevResponses) => ({
            ...prevResponses,
            [currentQuestion]: input,
        }));
        setPergunta(currentQuestion);
        setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
       
        e.target.reset();


        if (questionNumber === 4) {
            disparar([responses]);
        }
    };

    let currentQuestion;
    switch (questionNumber) {
        case 1:
            currentQuestion = "Qual é o seu nome?";
            break;
        case 2:
            currentQuestion = "Me diga um número para contato!";
            break;
        case 3:
            currentQuestion = "Como encontrou meu portfólio?";
            break;
        case 4:
            currentQuestion = "De que cidade você fala?";
            break;
        case 5:
            currentQuestion = "Obrigado por entrar em contato, mensagem recebida! Assim que possível eu entro em contato, ou me mande uma mensagem no WhatsApp (14) 99652-8505";

            break;
        default:
            currentQuestion = "Obrigado, você respondeu a todas as perguntas!";
    }
    
     const disparar = async (responses) => {
         let contador = 0;
         console.log(responses)
         responses?.map(([question, response]) => {
             return(
             if(contador === 0){
                 contador++;
                 console.log(question, response, '1')
             }else if (contador === 1){
                 contador++;
                 console.log(question, response, '2')
             }else if (contador === 2){
                 contador++;
                 console.log(question, response, '3')
             }else if (contador === 4){
                 contador++;
                 console.log(question, response, '4')
             })
     })

         axios.post('https://api.zenvia.com/v2/channels/whatsapp/messages', {
             from: 'outrageous-baron',
             // to: '5514996528505',
             contents: [{
                 type: 'text',
                 text: 'Eu te amo minha princesa!',
             }],
         },
             {
                 headers: {
                     'X-API-TOKEN': 'oOD_ySSIuCry1Iit54331-ZgSgPa1E_uaKKp',
                 }
             }
         )
             .then(res => {
                 console.log(res.data);
             })
             .catch(error => {
                 console.log(error);
             });
     }

    console.log(responses)
    
    return (

        <div className="contato" id="contato">
            <div className="left">
                <h2 style={{marginBottom: '20px'}}>Mande um Whatsapp</h2>
                <form onSubmit={handleSubmit2}>
                    <div style={{ width: '20.75rem', borderRadius: '10px' }}>
                        <div className='cabecalhowhats'>
                            <p>Web Services</p>
                            <p>Bem Vindo!</p>

                        </div>
                        <div className='centrowhats' placeholder='Mensagem' name="message">
                            <div ref={myDivRef}>

                                {Object.entries(responses).map(([question, response]) => {
                                    return(
                                    <div key={question}>
                                        <div>
                                            <div className='boxpergunta'>
                                                <p style={{ padding: '10px' }}>{question}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='boxresposta'>
                                                <p style={{ padding: '10px' }}>{response}
                                                </p>
                                            </div>
                                        </div>
                                    </div>)
                                   })}
                                <div className='boxpergunta'>
                                    <p style={{ padding: '10px' }}>{currentQuestion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='footertext'>
                            <input type="text" placeholder='Digite sua mensagem...' name="response" />
                            <input style={{ width: '30px', cursor: 'pointer' }} type="image" src={require("../../assets/send.png")} alt="Submit Form" />
                        </div>
                    </div>
                </form>
            </div>
            <div className='mobnone' style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img style={{ width: '250px' }} src={require("../../assets/juzaweb-removebg.png")} alt=""></img>
                </div>

            </div>
            <div className="right">
                <h2>Mande um E-Mail</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{ marginTop: '10px' }} type="text" placeholder='Nome' name="nome" />
                    <input type="text" placeholder='Telefone' name="Telefone" />
                    <input type="text" placeholder='Email' name="email" />
                    <textarea placeholder='Mensagem' name="message"></textarea>
                    <button type='submit'>Enviar</button>
                    {message && <span>Obrigado, entrarei em contato!</span>}
                </form>
            </div>

        </div>
    )
}
