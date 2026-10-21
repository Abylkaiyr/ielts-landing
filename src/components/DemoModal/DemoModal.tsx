import { useState } from 'react';
import styles from './DemoModal.module.less';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Здравствуйте! Хочу записаться на Demo Lesson.\nИмя: ${name}\nТелефон: ${phone}`);
    window.open(`https://wa.me/77068884036?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2 className={styles.title}>Записаться на Demo Lesson</h2>
        <p className={styles.subtitle}>
          Оставьте контакты — мы свяжемся с вами и подберём удобное время.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Ваше имя</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Алия"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Номер телефона</label>
            <input
              className={styles.input}
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Отправить заявку
          </button>

          <span className={styles.divider}>или</span>

          <a
            href="https://wa.me/77068884036?text=Здравствуйте!%20Хочу%20записаться%20на%20Demo%20Lesson"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappLink}
          >
            <i className="fa-brands fa-whatsapp"></i>
            Написать в WhatsApp напрямую
          </a>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
