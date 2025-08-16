'use client';
import { Accordion, AccordionItem } from "@heroui/react";
import { getTranslation } from '@/lib/i18n';

export default function FAQ({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const faq = [
    {
      label: "",
      question: t(""),
      answer: t(""),
    },
  ]

  return (
    <>
      <h3 className="text-2xl font-bold px-2 py-4">{t('Frequently Asked Questions About Black Screen Tool')}</h3>
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
