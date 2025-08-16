// MyNavbar.js (服务端组件)
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { getTranslation } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher"; // 新的客户端组件
import MobileMenu from "./MobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function MyNavbar({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  return (
    <Navbar classNames={{
      wrapper: "page-container"
    }}>
      <NavbarBrand>
        <Link href="/" className="text-foreground">
          <img src="/images/logo.png" alt="Black-Screen-Tool" width={32} height={32} />
          <p className="font-bold text-inherit mx-3 text-2xl">
            Black Screen Tool
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/blog">
            {t('Blog')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <LanguageSwitcher locale={locale} />
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <MobileMenu locale={locale} />
    </Navbar>
  );
}
