'use client';
import { Accordion, AccordionItem } from "@heroui/react";
import { getTranslation } from '@/lib/i18n';

export default function FAQ({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const faq = [
    {
      label: "What is Brat-Gen?",
      question: t("What is Brat-Gen?"),
      answer: t("Brat-Gen is a free Brat Generator celebrating Brat’s raw, vibrant aesthetic, letting you craft Brat-style covers with bold fonts and colors like Brat Green (#8ACE00)."),
    },
  ]

  return (
    <>
      <h3 className="text-2xl font-bold px-2 py-4">{t('Frequently Asked Questions about Unix Timestamp Converter')}</h3>
      < Accordion
        selectionMode="multiple"
        className="border-foreground/10 border-[1px] rounded-2xl px-6"
      >
        {
          faq.map((item, index) => (
            <AccordionItem key={index} aria-label={item.label} title={item.question}>
              {item.answer}
            </AccordionItem>
          ))
        }
      </Accordion>
    </>
  )
}
