import { useState } from 'react';
import styles from './FaqSection.module.less';

const FAQS = [
  {
    q: 'Что делать, если я пропущу онлайн-занятие?',
    a: 'Все уроки записываются автоматически и доступны в личном кабинете.',
  },
  {
    q: 'Можно ли оплатить обучение частями?',
    a: 'Да, доступна Каспи Рассрочка и оплата через Kaspi Red.',
  },
  {
    q: 'Как проходят уроки?',
    a: 'Занятия проходят на платформе Zoom в формате живого урока с преподавателем. Параллельно используется платформа Edvibe, где вы получаете доступ к материалам урока, выполняете задания и домашнюю работу — всё в одном удобном месте.',
  },
  {
    q: 'Как определяется мой уровень английского перед началом обучения?',
    a: 'Перед стартом мы проводим тестирование уровня и короткое собеседование с преподавателем. Это помогает точно определить вашу группу и подобрать программу, которая будет соответствовать именно вашим целям.',
  },
  {
    q: 'Нужно ли докупать дополнительные материалы или учебники?',
    a: 'Нет, все учебные материалы, задания и mock-тесты уже включены в стоимость курса и доступны на платформе Edvibe — покупать что-то дополнительно не нужно.',
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>ОТВЕТЫ НА ВОПРОСЫ</span>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.list}>
          {FAQS.map((faq, i) => (
            <div key={i} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <i className={`fa-solid fa-chevron-down ${styles.icon} ${open === i ? styles.iconOpen : ''}`}></i>
              </button>
              {open === i && (
                <div className={styles.answer}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
