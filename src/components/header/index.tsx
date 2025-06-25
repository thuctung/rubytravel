import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import './header-style.css';
import ChangeLanguage from '../change-language';

type MenuType = {
  title: string;
  link: string;
};

const Header = () => {
  const t = useTranslations();
  const listMenu: Array<MenuType> = [
    { title: t('header.home'), link: '/' },
    { title: t('header.hotel'), link: '/' },
    { title: t('header.ticket'), link: '/' },
    { title: t('header.airboadTicket'), link: '/' },
    { title: t('header.spa'), link: '/' },
    { title: t('header.driver'), link: '/' },
  ];

  return (
    <div className="padding-common flex items-center justify-between sticky top-0 z-100 bg-white ">
      <div className="">
        <Link href="/">
          <Image src="/logo.jpg" width={90} height={90} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-wrap justify-end wrapper-menu">
          {listMenu.map((item: MenuType, index: number) => (
            <li className="mx-4 relative hover:text-red-500 font-bold menu-item  " key={index}>
              <Link href={item.link} className="">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <ChangeLanguage />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
