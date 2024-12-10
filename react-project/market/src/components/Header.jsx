import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="/">{t('home')}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('info')}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        {t('delivery')}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        {t('contact')}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="/about">
                        {t('about')}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/cart">{t('cart')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/login">{t('login')}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {t('profile')}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item text-white" href="/cart">{t('cart')}</a></li>
                    <li><a className="dropdown-item text-white" href="/profile">{t('profile')}</a></li>
                    <li><a className="dropdown-item text-white" href="#">{t('admin')}</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item text-white" href="#">{t('logout')}</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex me-3" role="search">
                <input className="form-control me-2" type="search" placeholder={t('search')} aria-label="Поиск" />
                <button className="btn btn-search" type="submit">{t('search')}</button>
              </form>
              <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  {t('language')}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                  <li><a className="dropdown-item" href="#" onClick={() => handleLanguageChange('ru')}>Русский</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleLanguageChange('en')}>English</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
