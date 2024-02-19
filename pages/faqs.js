// Import React and necessary Next.js modules
import { useState } from 'react';
import "../styles/Faqs.css"

// Define the FAQ component
const FAQ = () => {
    // Define state to manage active toggles
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle toggle click
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <h1>Frequently Asked Questions</h1>
            <div className='faq-container'>
                {/* Map through FAQs */}
                {faqs.map((faq, index) => (
                    <div className={`faq ${activeIndex === index ? 'active' : ''}`} key={index}>
                        {/* FAQ title */}
                        <h3 className='faq-title' onClick={() => handleToggle(index)}>{faq.title}</h3>
                        {/* FAQ content */}
                        <p className='faq-text'>{faq.text}</p>
                        {/* Toggle button */}
                        <button className='faq-toggle' onClick={() => handleToggle(index)}>
                            {/* Chevron icon */}
                            <svg className={`chevron w-6 h-6 text-gray-800 dark:text-white ${activeIndex === index ? 'hidden' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 8'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1' />
                            </svg>
                            {/* Close icon */}
                            <svg className={`close w-6 h-6 text-gray-800 dark:text-white ${activeIndex !== index ? 'hidden' : ''}`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </>

    );
};

// Define FAQs data
const faqs = [
    {
        title: 'What is the entry level to school?',
        text: 'At the Ved Model Sr. Sec.School, the entry level to school is Nursery. The age criterion for Nursery is 3+ years as on 31.3.2024.'
    },
    {
        title: 'What is the assessment pattern of Ved Model Sr. Sec. School, Kalanaur?',
        text: `The class wise assessment pattern is as follows:
    Class Assessment Pattern
    Unit Test 1 + Unit Test 2 (internal assessment)
    Term I
    Unit Test 3 + Unit Test 4
    Term II
    X - XI: As per the CBSE guidelines.`
    },
    {
        title: 'How are activities and sports conducted for an effective teaching learning process?',
        text: 'Our curriculum is a unique blend of world class pedagogy and teaching methodology. The amalgam of various activities is an integral part of teaching methodology. Exposure to multiple activities enables us to tap into the diversity of intelligence of each child, discover their strengths and provide a suitable platform to excel.Language skills, along with personal, social and physical education are a part of academic learning. We have extensive sports facilities with a structured program to encourage students to pursue sports seriously.'
    },
    {
        title: 'What is the student teacher ratio?',
        text: 'For effective curriculum implementation, the school maintains a student teacher ratio of 1:30.'
    },
    {
        title: 'How is the competence of faculty ensured?',
        text: 'There is a rigorous process of selecting the faculty members. The process involves written test, personal and subject interview and class demonstration. To continuously enhance the skills of the faculty and to keep them abreast with the latest developments in the field of education, regular workshops from Team Vedians and CBSE are conducted.'
    },
    {
        title: 'What kind of systems are followed by the school to ensure the safety, security and hygiene standards?',
        text: `The safety and security of children is the prime concern of the school and all plausible steps are taken to ensure it in the school campus and the school buses.
        The campus has CCTV surveillance, fire detection and fire fighting measures of highest standards.
        The security guards at the gate and at various vantage points are trained to control and monitor any kind of movement inside the campus.
        School buses are air-conditioned and are equipped with Global Positioning System, DVR cameras for surveillance & speed governors.
        To meet any medical emergency, the school has professionally qualified full time doctor and nurse on its rolls.
        Highest standards of hygiene and sanitation are maintained. The school has a housekeeping department with trained attendants.
        Each washroom has sensory taps, soap dispensers, toilet rolls, disposable hand towels and an attendant at all times.
        RO water in disposable glasses is served to students.
        `
    },
    {
        title: 'Does the school provide transport facility to the students?',
        text: 'Yes, the school owns a fleet of deluxe air-conditioned buses equipped with Global Positioning System, DVR cameras for surveillance catering to the whole of Jhajjar and near by areas. Each bus has a lady security guard in place for additional safety of children.'
    },
    {
        title: 'Does the school serve meals to the students?',
        text: 'The School has a cafeteria and students have an option of procuring food from there. The School cafeteria serves wholesome, delicious and hygienically cooked food.'
    },
    {
        title: 'What is the curriculum strength of Pre Nursery?',
        text: 'At the compact and caring environment of the Pre Nursery campus, Ved Model Tiny Tots School follows the Montessori Method of education combined with Gardners Multi Intelligence Theory.'
    },
    {
        title: 'How does the school ensure that individual attention is provided to each child?',
        text: 'In order to ensure that individual attention is provided to each child, the school maintains a healthy student teacher ratio.'
    },
    {
        title: 'Does school provide boarding facility?',
        text: 'The school has Day-boarding facility for the students. The refreshment is served at school with additional cost.'
    },
];

export default FAQ;
