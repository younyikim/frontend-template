import { useLocale } from 'next-intl';
import Link from 'next/link';

import { EngIcon, KorIcon } from '@/app/_components/common/icons';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'ko' : 'en';

  return (
    <Link href={'/' + otherLocale} prefetch={false}>
      {locale === 'ko' ? <KorIcon /> : <EngIcon />}
    </Link>
  );
}
