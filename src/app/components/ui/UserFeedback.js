import { getTranslation } from '@/lib/i18n';
import { Card, CardBody } from '@heroui/react';

export default function UserFeedback({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const userFeedbacks = [
    {
      name: 'John Doe',
      title: t('Software Developer'),
      description: t("The Black Screen's white fullscreen mode is a game-changer for coding focus—highly recommend it!"),
    },
    {
      name: 'Sarah Lee',
      title: t('Graphic Designer'),
      description: t('Downloading 4K Black Screen images with custom colors has elevated my design work—love the flexibility!'),
    },
    {
      name: 'Mike Chen',
      title: t('Gamer'),
      description: t('OLED Protection on the Black Screen safeguards my monitor during marathons—brilliant addition!'),
    },
    {
      name: 'Emily Wang',
      title: t('Teacher'),
      description: t('The Black Screen timer helps me balance lesson prep with breaks—perfect for my schedule.'),
    },
    {
      name: 'Tom Smith',
      title: t('IT Support'),
      description: t('Testing with Black Screen’s red and green modes fixed display issues fast—saved me hours!"'),
    },
    {
      name: 'Lisa Kim',
      title: t('Student'),
      description: t('No registration for the Black Screen is a plus; the purple fullscreen mode boosts my study focus.'),
    },
  ]

  return (
    <>
      <h2 className="text-2xl font-bold px-2 py-4">{t('Real User Feedback on Black Screen Tool')}</h2>
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
