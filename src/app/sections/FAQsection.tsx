'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from '../styles/faqSection.module.scss';
import { useAppContext } from '../contexts/store';
const FAQsection = () => {
  const {
    state: { userLang },
  } = useAppContext();
  return (
    <section id='FAQ' className={styles.faqSection}>
      {/* MAIN CONT START */}
      <div className={styles.masterContainer}>
        <div className={styles.sectionHeading}>
          <h2>{userLang === 'hr' ? 'NAJČEŠĆA PITANJA' : 'FREQUENTLY ASKED QUESTIONS'}</h2>
        </div>
        <div className={styles.faqContainer}>
          <Accordion allowZeroExpanded className={styles.accordion}>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Minimalan broj osoba za pješačku turu Kudin most?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>Minimalan broj osoba u grupi sa lokalnim vodičem je 6.</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Koliko traje kayak/rafting tura?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Rafting i kayak tura nisu istog trajanja, razlika je u približno satu vremena. Rafting tura traje oko
                  2:30 sata, obzirom da se raftovima ide kad je vodostaj viši i rijeka puno brža tako i sam izlet traje
                  kraće. Kayak tura traje oko 3:30 sata i aktivna je kada je vodostaj rijeke nešto niži. Ovo je naravno
                  zlatna sredina i svaka tura je individualna na način da je brzina i kayak i rafting ture naravno
                  onolika kolika je brzina najsporijeg veslača u grupi.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Kako se vratimo sa cilja kayak/rafting ture na start po automobile?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Pri dolasku na cilj staze, gosti se presvlače u suhu odjeću koju smo dovezli našim vozilima na cilj.
                  Nakon kratkog predaha organizira se povratak po vozila. Na službeni start voze se isključivo samo
                  vozači automobila. Ostatak grupe ostaje na cilju gdje čekaju vozače sa osobnim automobilima da se
                  vrate po njih.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Postoji li vodič u kayak turi?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Vodič u kayak turi postoji, te ovisno o veličini same grupe broj vodiča raste. Ponekad grupe imaju i 3
                  vodiča iako je najčešća situacija da grupu vode 2 vodiča.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowZeroExpanded className={styles.accordion}>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Koji uzrast može ići na kayak/rafting turu?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Donja granica je 5 godina. Vrlo je važno napomenuti da u slučaju vrlo visoke vode dob djece se naravno
                  mijenja. To se najčešće odnosi na rafting ture. Kod kayak tura ova dob je odobrena i vrlo je važno
                  napomenuti da djeca obavezno u kayak idu sa odraslom osobom - roditelj/staratelj odgovoran za
                  maloljetnika.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Gdje starta kayak/rafting tura?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Službeni start rafting/kayak ture nalazi se u Kaštel Žegarskom. Na ovoj lokaciji okuplja se grupa,
                  parkira svoje automobile, preuzima opremu potrebnu za spust i ulazi u rijeku.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading className={styles.accordionItemHeading}>
                <AccordionItemButton className={styles.accordionItemButton}>
                  Što ponijeti sa sobom na kayak/rafting turu?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionItemPanel}>
                <p>
                  Svaki gost trebao bi imati kremu za sunce, tenisice sa kojima može u vodu, dodatnu presvlaku koju sa
                  ručnikom šalje na cilj te po volji hranu i piće. Od strane organizatora osigurane su vodonepropusne
                  bačvice u koje se mogu staviti predmeti koje želite sa sobom u kanjonu. Organizator nije odgovoran za
                  elektronske uređaje poput mobilnih telefona, fotoaparata, GoPro kamera i sl. U slučaju da želite sa
                  sobom nositi naočale za sunce ili vid, predlažemo da ih osigurate prikladnom trakom oko vrata ili
                  osigurate za pojas za spašavanje.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default FAQsection;
