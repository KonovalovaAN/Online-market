import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="py-4 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">{t('footerMessage')}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
