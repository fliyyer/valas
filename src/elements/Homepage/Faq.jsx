import AOS from 'aos';
import React, { useEffect, useState } from 'react';

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'Why is sending money with Valast ceaper & faster than the conventional way?',
            answer: 'Valast leverages cutting-edge technology and a streamlined process to make money transfers more cost-effective and efficient. By eliminating intermediaries and optimizing currency exchange rates, Valast can offer lower fees and quicker transaction times compared to traditional methods.',
        },
        {
            question: 'What if my transaction fails?',
            answer: 'If your transaction fails for any reason, you can contact Valasts customer support team for assistance. They will help you identify the issue and guide you through the necessary steps to resolve it.',
        },
        {
            question: 'How will I know when my money has arrived?',
            answer: 'Valast will provide you with real-time notifications and updates regarding the status of your transaction. You will receive a confirmation once your money has been successfully transferred to the recipient.',
        },
        {
            question: 'What to do if I have questions or problems when creating a transaction?',
            answer: 'If you encounter any issues or have questions while creating a transaction, you can reach out to Valas customer support team for prompt assistance. They are available 247 to help you with any concerns.',
        },
        {
            question: 'Cam I make payment using a business bank account?',
            answer: 'Yes, Valast supports payments from both personal and business bank accounts. You can choose the type of account you want to use when creating a transaction.',
        },
    ]);

    const toggleFAQ = (index) => {
        const updatedFaqs = [...faqs];
        updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
        setFaqs(updatedFaqs);
    };

    useEffect(() => {
        AOS.init()
    })

    return (
        <div className="container max-w-5xl 2xl:max-w-7xl px-2 md:px-0 mx-auto" data-aos='fade-up' data-aos-duration='3000'>
            <h1 className="text-2xl font-bold text-[#004387] text-center my-[79px]">FREQUENTLY ASKED QUESTIONS</h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="mb-4"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flex justify-between items-center border border-[#0360D9] px-7 py-6 rounded-[15px]">
                        <h2 className="text-lg text-[#505050] font-semibold">{faq.question}</h2>
                        <span className=''>{faq.isOpen ? '-' : '+'}</span>
                    </div>
                    {faq.isOpen && <p className="mt-2 bg-slate-200 rounded-md py-2 px-7">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
