import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser'


const Contact = () => {

  const [msg, setMsg] = useState({
      name: "",
      email: "",
      subject: "",
      content: ""

    })

  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};
    
    if (!msg.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    
    if (!msg.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(msg.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    
    if (!msg.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }
    
    if (!msg.content.trim()) {
      newErrors.content = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSendMail(e) {
    e.preventDefault();
    
    if (validateForm()) {
      emailjs.init("yWOKM5GPoaBlTkgnA");
      emailjs.sendForm('service_v86nwdo', 'template_ffemc4c', e.target)
        .then(function () {
          alert('Email envoyé avec succès!');
          setMsg({name: "", email: "", subject: "", content: ""});
          setErrors({});
        }, function (error) {
          console.log(error);
          alert('Échec de l\'envoi: ' + error.text);
        });
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h3>ENTRER EN CONTACT</h3>
            <p><i className="fa-solid fa-location-dot"></i> Antsirabe 110, Madagascar</p>
            <p><i className="fa-solid fa-phone"></i> +261 34 13 075 93</p>
            <p><i className="fa-solid fa-envelope"></i> fenoherymanjaka10@gmail.com</p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSendMail}>
              <div className="info">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="VOTRE  NAME"
                    value={msg.name}
                    onChange={(e) => setMsg({...msg, name: e.target.value})}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="input-group">
                  <input
                    onChange={(e) => setMsg({...msg, email: e.target.value})} 
                    value={msg.email}
                    type="text" 
                    name="email" 
                    placeholder="VOTRE EMAIL" 
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                
                </div>
              </div>
              <div className="subject">
                <input 
                  onChange={(e) => setMsg({...msg, subject: e.target.value})}
                  value={msg.subject}
                  type="text" 
                  name="subject" 
                  placeholder="OBJET" 
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              <div className="msg">
                <textarea 
                  onChange={(e) => setMsg({...msg, content: e.target.value})}
                  value={msg.content}
                  name="message" 
                  placeholder="MESSAGE" 
                  className={errors.content ? 'error' : ''}
                  rows="8"></textarea>
                {errors.content && <span className="error-message">{errors.content}</span>}
              </div>
              <div className="send">
                <button type="submit" className="send-btn">ENVOYER VOTRE MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
