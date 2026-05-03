import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const useContactForm = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(
        'service_ac9dhm5',
        'template_zuzrjwi',
        formRef.current,
        'ahRzRP_DbaUrC5ZIS',
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return { formRef, status, handleSubmit };
};

export default useContactForm;
