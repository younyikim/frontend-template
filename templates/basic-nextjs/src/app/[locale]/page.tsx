import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/app/_components/common/LocaleSwitcher';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <LocaleSwitcher />
      <p className='typo-big-title0'>{t('title')}</p>
      <p className='typo-big-title1'>{t('userName', { userName: 'Test' })}</p>
    </div>
  );
}
