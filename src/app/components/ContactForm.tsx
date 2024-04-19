// 'use client';
// import React, { FormEvent } from 'react';
// import styles from '../styles/contact.module.scss';
// import { useAppContext } from '../contexts/store';
// import webContent from '../../../public/webdata/webcontent.json';
// import AppButton from './AppButton';
// import { useFormspark } from '@formspark/use-formspark';

// const ContactForm = () => {
//   const [contactFormData, setContactFormData] = React.useState<Record<string, string>>({
//     name: '',
//     email: '',
//     phone: '',
//     activity: '',
//     message: '',
//   });

//   const formKey = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

//   const [submit, submitting] = useFormspark({
//     formId: formKey as string,
//   });
//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     await submit(contactFormData);
//   };

//   const handleInputs = (inputEvent: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
//     setContactFormData((_prev) => {
//       return { ..._prev, [inputName]: inputEvent.target.value };
//     });
//   };

//   const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
//     setContactFormData((_prev) => {
//       return { ..._prev, ['message']: event.target.value };
//     });

//   const handleActivitySelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
//     setContactFormData((_prev) => {
//       return { ..._prev, ['activity']: event.target.value };
//     });

//   const {
//     state: { userLang },
//   } = useAppContext();

//   const parseLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);

//   return (
//     <div className={styles.contactFormContainer}>
//       <form action='' onSubmit={handleSubmit} className={styles.contactForm}>
//         <div className={styles.formBlockLeft}>
//           <input onChange={(event) => handleInputs(event, 'name')} type='text' placeholder={parseLang('Ime', 'Name')} />
//           <input
//             onChange={(event) => handleInputs(event, 'email')}
//             type='email'
//             placeholder={parseLang('Email', 'Email')}
//           />
//           <input
//             onChange={(event) => handleInputs(event, 'phone')}
//             type='text'
//             placeholder={parseLang('Telefon', 'Phone')}
//           />
//           <select onChange={handleActivitySelect} name='aktivnost' id=''>
//             <option value='' defaultValue={'Odaberi aktivnost'} selected disabled>
//               Odaberi aktivnost
//             </option>
//             {webContent.map(
//               (activity) =>
//                 activity.NASLOV_AKTIVNOSTI_HERO_HR !== '' && (
//                   <option value={activity.NASLOV_AKTIVNOSTI_HERO_HR} key={activity.NASLOV_AKTIVNOSTI_HERO_HR}>
//                     {activity.NASLOV_AKTIVNOSTI_HERO_HR}
//                   </option>
//                 )
//             )}
//           </select>
//         </div>
//         <div className={styles.formBlockRight}>
//           <textarea
//             onChange={handleTextarea}
//             name=''
//             placeholder={parseLang('Poruka', 'Message')}
//             id=''
//             cols={30}
//             rows={10}
//           ></textarea>
//           <AppButton isContact content={parseLang('Pošalji upit', 'Send inquiry')} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
