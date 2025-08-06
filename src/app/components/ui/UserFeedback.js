import { getTranslation } from '@/lib/i18n';
import { Card, CardBody } from '@heroui/react';

export default function UserFeedback({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const userFeedbacks = [
    {
      name: 'Maya Chen',
      title: t('Social Media Explorer'),
      description: t('Brat-Gen’s Brat Generator is a game-changer! I create Brat-style covers with Brat Green (#8ACE00) and share them on X and Instagram, boosting my Brat Summer posts’ viral reach.'),
    },
  ]

  return (
    <>
      <h3 className="text-2xl font-bold px-2 py-4">{t('User Reviews of Our Unix Timestamp Converter')}</h3>
      <div className="flex flex-wrap gap-8 justify-between">
        {userFeedbacks.map((feedback, index) => (
          <Card
            shadow="none"
            disableRipple
            className="select-none box-border border-foreground/10 border-[1px] min-w-[160px] max-w-full md:max-w-[30%] p-2 flex-shrink-0"
            radius="lg"
            key={index}
          >
            <CardBody>
              <p>{feedback.description}</p>
              <p className="text-sm mt-8">{feedback.name}</p>
              <p className="text-sm text-gray-500 mt-2">{feedback.title}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}
