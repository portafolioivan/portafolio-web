import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'ivan@example.com',
      subtitle: 'Respuesta en 24h',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Teléfono',
      value: '+54 11 1234-5678',
      subtitle: 'Lunes a Viernes 9-18hs',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      subtitle: 'Trabajo remoto disponible',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Horario',
      value: '9:00 - 18:00',
      subtitle: 'GMT-3',
      color: 'bg-neutral/10 text-neutral'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <FaEnvelope />, label: 'Email', url: 'mailto:ivan@example.com' }
  ];

  return (
    <section className="min-h-screen py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Hablemos y hagamos realidad tus ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${info.color.split(' ')[0]} backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{info.title}</h3>
                      <p className="font-semibold">{info.value}</p>
                      <p className="text-sm opacity-75">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-base-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
              <div className="h-64 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="text-2xl text-primary-content" />
                  </div>
                  <p className="font-bold text-lg">Buenos Aires, Argentina</p>
                  <p className="text-base-content/70">
                    Trabajo remoto disponible mundialmente
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg border border-base-300">
            <h3 className="text-2xl font-bold mb-2">Envíame un mensaje</h3>
            <p className="text-base-content/70 mb-8">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
            </p>

            {submitStatus === 'success' && (
                <div className="alert alert-success mb-6">
                <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text font-semibold">Nombre</span>
                    </label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                    />
                </div>
                </div>

                {/* Asunto */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Asunto</span>
                </label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué puedo ayudarte?"
                    className="input input-bordered w-full focus:outline-none focus:border-primary"
                />
                </div>

                {/* Mensaje */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Mensaje</span>
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    className="textarea textarea-bordered w-full resize-none focus:outline-none focus:border-primary"
                />
                </div>

                {/* Botón */}
                <div className="pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary btn-lg w-full ${
                    isSubmitting ? 'loading' : ''
                    }`}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                </div>

                {/* Nota legal */}
                <p className="text-sm text-base-content/60 text-center">
                Al enviar este formulario aceptas que me ponga en contacto contigo por email.
                </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
