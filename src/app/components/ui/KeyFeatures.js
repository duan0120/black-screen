import { getTranslation } from '@/lib/i18n';
import { Card, CardHeader, CardBody } from '@heroui/react';

export default function KeyFeatures({ locale = 'en', title, keyFeatures }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  return (
    <>
      <h2 className="text-2xl font-bold px-2 py-4">{title}</h2>
      <div className="flex flex-wrap gap-8 justify-between md:justify-start" >
        {
          keyFeatures.map((feature) => (
            <Card
              shadow="none"
              disableRipple
              className="select-none box-border border-foreground/10 border-[1px] min-w-[160px]  max-w-full md:max-w-[30%]  p-2 flex-shrink-0 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              radius="lg"
              key={feature.title}
            >
              <CardHeader className="justify-between gap-5">
                <h3 className="text-lg font-bold px-2">{feature.title}</h3>
              </CardHeader>
              <CardBody>
                <p>{feature.description}</p>
              </CardBody>
            </Card>
          ))
        }
      </div>
    </>
  )
}
