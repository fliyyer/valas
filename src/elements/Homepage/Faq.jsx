import AOS from 'aos';
import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../../utils/LanguageContext';

const FAQ = () => {
    const { t } = useContext(LanguageContext);
    const [faqs, setFaqs] = useState([
        {
            question: t('Mengapa kirim uang dengan Valast bisa lebih cepat dan biaya lebih murah?'),
            answer: t('desc faq1'),
        },
        {
            question: t('Bagaimana jika transaksi gagal?'),
            answer: t('desc faq2'),
        },
        {
            question: t('Bagaimana cara mengetahui uang sudah terkirim ke penerima?'),
            answer: t('desc faq3'),
        },
        {
            question: t('Apa yang harus dilakukan ketika ada pertanyaan dan kendala saat transaksi?'),
            answer: t('desc faq4'),
        },
        {
            question: t('Apakah pembayaran bisa menggunakan rekening bisnis?'),
            answer: t('desc faq5'),
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
            <h1 className="text-2xl font-bold text-[#004387] text-center my-[79px]">{t('Punya Pertanyaan Seputar Valast?')}</h1>
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
