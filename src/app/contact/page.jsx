
import styles from './contact.module.css';

import { Container } from 'react-bootstrap';

import FandQ from '@/components/f&q/FandQ';
import Contact from '@/components/contact-section/Contact';

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <Container>
        <Contact />
        <FandQ />
      </Container>
    </main>
  );
}
