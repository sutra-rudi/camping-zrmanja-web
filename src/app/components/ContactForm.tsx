'use client';
import React, { FormEvent } from 'react';
import styles from '../styles/contact.module.scss';
import { useAppContext } from '../contexts/store';
import AppButton from './AppButton';
import { useFormspark } from '@formspark/use-formspark';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

import { BsCalendarDate as CalendarIcon } from 'react-icons/bs';
import { E164Number } from 'libphonenumber-js/core';
import { toast } from 'react-hot-toast';
import { kampKuciceContent } from '../staticContentData/kampKucice';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
const ContactForm = () => {
  const [contactFormData, setContactFormData] = React.useState<Record<string, any>>({
    name: '',
    email: '',
    phone: null,
    accomodation: '',
    message: '',
    dateOfVisit: new Date(),
    numOfPeople: undefined,
    numOfChildren: undefined,
  });

  const [errors, setErrors] = React.useState<string[]>([]);

  const formKey = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

  const params = useSearchParams();
  const checkParams = params.get('lang');

  const shorthandCheck = checkParams === UserLanguage.hr;

  React.useEffect(() => {
    const validate = () => {
      setErrors([]);
      if (!contactFormData.name)
        setErrors((prev) => [...prev, shorthandCheck ? 'Ime je obavezno' : 'Name is required']);
      if (!contactFormData.email)
        setErrors((prev) => [...prev, shorthandCheck ? 'Email je obavezan' : 'Email is required']);
      else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) setErrors((prev) => [...prev, 'Email is invalid']);
      if (!contactFormData.phone)
        setErrors((prev) => [...prev, shorthandCheck ? 'Broj telefona je obavezan' : 'Phone number is required']);
      else if (!isValidPhoneNumber(contactFormData.phone)) setErrors((prev) => [...prev, 'Invalid phone number']);
      if (!contactFormData.accomodation)
        setErrors((prev) => [...prev, shorthandCheck ? 'Smještaj je obavezan' : 'Accomodation is required']);
      if (!contactFormData.message)
        setErrors((prev) => [...prev, shorthandCheck ? 'Poruka je obavezna' : 'Message is required']);
      if (!contactFormData.dateOfVisit)
        setErrors((prev) => [...prev, shorthandCheck ? 'Datum posjete je obavezan' : 'Date of visit is required']);
      if (contactFormData.numOfPeople === undefined)
        setErrors((prev) => [...prev, shorthandCheck ? 'Broj osoba je obavezan' : 'Number of people is required']);
      if (contactFormData.numOfChildren === undefined)
        setErrors((prev) => [...prev, shorthandCheck ? 'Broj djece je obavezan' : 'Number of children is required']);
    };

    validate();
  }, [contactFormData, shorthandCheck]);

  const [submit, submitting] = useFormspark({
    formId: formKey as string,
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (errors.length === 0) {
      // console.log('CONTACT FORM DATA', contactFormData);
      await submit(contactFormData);
    } else {
      console.log('Form validation failed', errors);

      errors.forEach((error) => toast.error(error));
    }
  };

  const handleInputs = (inputEvent: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setContactFormData((_prev) => {
      return { ..._prev, [inputName]: inputEvent.target.value };
    });
  };

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContactFormData((_prev) => {
      return { ..._prev, ['message']: event.target.value };
    });

  const handleAccomodationSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setContactFormData((_prev) => {
      return { ..._prev, ['accomodation']: event.target.value };
    });

  const handleDatePick = (date: Date | null) =>
    setContactFormData((_prev) => {
      return { ..._prev, ['dateOfVisit']: date };
    });

  const handlePhoneInput = (event: E164Number) => {
    setContactFormData((_prev) => {
      return { ..._prev, ['phone']: event };
    });
  };

  const {
    state: { userLang },
  } = useAppContext();

  const parseLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);

  return (
    <div className={styles.contactFormContainer}>
      <form action='' onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formBlockLeft}>
          <input onChange={(event) => handleInputs(event, 'name')} type='text' placeholder={parseLang('Ime', 'Name')} />
          <input
            onChange={(event) => handleInputs(event, 'email')}
            type='email'
            placeholder={parseLang('Email', 'Email')}
          />
          <div className={styles.phoneInputWrapp}>
            <PhoneInput
              defaultCountry='HR'
              onChange={(event) => handlePhoneInput(event!)}
              initialValueFormat='national'
              placeholder='Enter phone number'
              error={
                contactFormData.phone
                  ? isValidPhoneNumber(contactFormData.phone)
                    ? undefined
                    : 'Invalid phone number'
                  : 'Phone number required'
              }
            />
          </div>
          <input
            onChange={(event) => handleInputs(event, 'numOfPeople')}
            type='number'
            placeholder={parseLang('Broj ljudi', 'Number of people')}
            min={0}
            max={12}
          />
          <input
            onChange={(event) => handleInputs(event, 'numOfChildren')}
            type='number'
            placeholder={parseLang('Broj djece ispod 12 godina', 'Number of children under 12')}
            min={0}
            max={12}
          />
          <div className={styles.datePickerWrapp}>
            <DatePicker
              onChange={(date) => handleDatePick(date)}
              selected={contactFormData['dateOfVisit']}
              minDate={new Date()}
              placeholderText='Odaberite datum posjete'
              disabledKeyboardNavigation
              onFocus={(e) => e.target.blur()}
            />
            <CalendarIcon className={`lg:text-2xl text-lg group-focus:text-interactive-green  text-text-white`} />
          </div>
          <select onChange={handleAccomodationSelect} name='aktivnost' id=''>
            <option value='' defaultValue={'Odaberi aktivnost'} selected disabled>
              {checkParams === UserLanguage.hr ? 'Odaberi smještaj' : 'Pick accomodation'}
            </option>
            {kampKuciceContent.map((kucica) => (
              <option key={kucica.klasa}>{checkParams === UserLanguage.hr ? kucica.titleHr : kucica.titleEng}</option>
            ))}
          </select>
        </div>
        <div className={styles.formBlockRight}>
          <textarea
            onChange={handleTextarea}
            name=''
            placeholder={parseLang('Poruka', 'Message')}
            id=''
            cols={30}
            rows={10}
          ></textarea>
          <AppButton isContact content={parseLang('Pošalji upit', 'Send inquiry')} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
