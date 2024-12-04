import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('aboutTitle'); 
  }, [t]);

  const developerNames = t('developerNames', { returnObjects: true });

  return (
    <div>
      <div style={{ padding: '15px', borderRadius: '15px' }}></div>
      <section>
        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-12">
              <div className="text-background">
                <h3 className="text-center">{t('developerInfo')}</h3> 
                <div className="d-flex justify-content-center flex-wrap">
                  {["благодать.jpg", "лев.jpg", "ра.jpg", "лёха.jpg"].map((img, index) => (
                    <div className="p-4" key={index}>
                      <a className="card-div">
                        <img src={`../deps/images/developers/${img}`} className="card-img" alt={t('developerImageAlt')} />
                        <h5 className="card-title text-center">{developerNames[index]}</h5> 
                      </a>
                    </div>
                  ))}
                </div>
                <h3 className="text-center">{t('simpleWish')}</h3> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ padding: '50px', borderRadius: '15px' }}></div>
    </div>
  );
}

export default About;
