
//
import styles from './contact.module.css';

//import bootstrap
import { Container, Row, Col } from "react-bootstrap";
//components
import SectionTitle from '../buttons/section-title/SectionTitle';
import ContactForm from './left-contact/ContactForm';
import RightContact from './right-contact/RightContact';

export default function Contact(){
    return(
        <section className={styles.contact}>
            <Container>
                <div className="contact-top">
                    <SectionTitle textContent={'Contact us'} />
                </div>
                <Row>
                    <ContactForm />
                    <RightContact />
                </Row>
            </Container>
        </section>
    )
}