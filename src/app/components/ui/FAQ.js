'use client';
import { Accordion, AccordionItem } from "@heroui/react";
import { getTranslation } from '@/lib/i18n';

export default function FAQ({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const faq = [
    {
      label: "What is the Black Screen Tool?",
      question: t("What is the Black Screen Tool?"),
      answer: t("The Black Screen is a free tool for fullscreen mode, OLED Protection, and pixel testing with multiple colors."),
    },
    {
      label: "How do I start fullscreen mode?",
      question: t("How do I start fullscreen mode?"),
      answer: t("Press 'F' to enter fullscreen mode on the Black Screen; exit with 'Esc' or a click."),
    },
    {
      label: "Are image downloads available?",
      question: t("Are image downloads available?"),
      answer: t("Yes, download Black Screen images from 480p to 8K or custom sizes for various uses."),
    },
    {
      label: "How does OLED Protection work?",
      question: t("How does OLED Protection work?"),
      answer: t("OLED Protection on the Black Screen uses a moving 10x10 white block to prevent burn-in."),
    },
    {
      label: "Can I adjust the timer?",
      question: t("Can I adjust the timer?"),
      answer: t("Yes, set switch intervals and exit times with the Black Screen timer for customized breaks."),
    },
    {
      label: "Do I need to register?",
      question: t("Do I need to register?"),
      answer: t("No, the Black Screen is free with no registration required."),
    },
    {
      label: "Which colors can I use?",
      question: t("Which colors can I use?"),
      answer: t("The Black Screen provides black, white, red, green, blue, yellow, orange, pink, purple, and custom colors."),
    },
    {
      label: "How do I stop OLED Protection?",
      question: t("How do I stop OLED Protection?"),
      answer: t("Click the mouse to exit OLED Protection mode on the Black Screen."),
    },
    {
      label: "Can I set custom image sizes?",
      question: t("Can I set custom image sizes?"),
      answer: t("Absolutely, customize Black Screen image resolutions to suit your needs."),
    },
    {
      label: "Why choose fullscreen mode?",
      question: t("Why choose fullscreen mode?"),
      answer: t("Fullscreen mode on the Black Screen enhances focus and streamlines display testing."),
    },
  ]

  return (
    <>
      <h3 className="text-2xl font-bold px-2 py-4">{t('Answers to Common Questions About Black Screen')}</h3>
      <p>{t("Address your curiosities with these ten FAQs about the Black Screen Tool, designed to clarify usage and boost SEO visibility.")}</p>
      <Accordion
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
