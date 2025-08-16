"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure
} from "@heroui/react";
import { RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslation } from "@/lib/i18n";

export default function MobileMenu({ locale }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const t = function (key) {
    return getTranslation(locale, key);
  }

  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <div className="mx-auto items-center justify-between h-14 flex lg:hidden">
      <Button isIconOnly variant="light" onPress={onOpen}>
        <RiMenuLine className="w-6 h-6" />
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="right" className="w-4/5">
        <DrawerContent>
          <DrawerBody>
            <div className="flex flex-col gap-4 p-4">
              <Link href="/" className="text-lg text-foreground hover:text-primary flex items-center" onClick={handleLinkClick}>
                <img src="/images/logo.png" alt="Black-Screen-Tool" width={32} height={32} />
                <p className="font-bold text-inherit mx-3 text-2xl">
                  Black Screen Tool
                </p>
              </Link>
              <Link href="/blog" className="text-lg text-foreground hover:text-primary" onClick={handleLinkClick}>
                {t('Blog')}
              </Link>
              <LanguageSwitcher locale={locale} />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
