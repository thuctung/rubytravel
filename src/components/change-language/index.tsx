import { useTranslations } from 'next-intl';
import Image from 'next/image';

const LANGS = [
  {
    lang: 'vi',
    flag: 'vi.svg',
  },
  {
    lang: 'en',
    flag: 'en.svg',
  },
  {
    lang: 'ko',
    flag: 'ko.svg',
  },
  {
    lang: 'cn',
    flag: 'cn.svg',
  },
];

const ChangeLanguage = () => {
  const t = useTranslations('language');
  return (
    <div className="flex h-full items-center">
      {LANGS.map((item) => (
        <a key={item.lang} title={t(`${item.lang}`)}>
          <Image className="mx-1 cursor-pointer" src={`/images/${item.flag}`} width={24} height={12} alt={item.lang} />
        </a>
      ))}
    </div>
  );
};

export default ChangeLanguage;
