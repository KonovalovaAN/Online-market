import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "О нас"; 
  }, []);
  return (
    <div>
     <div style={{ padding: '15px', borderRadius: '15px' }}></div>
      <section>
        <div className="container">
          <div className="row mt-1">
            <div className="col-lg-12">
              <div className="text-background">
                <h3 className="text-center">Информация о разработчиках</h3>
                <div className="d-flex justify-content-center flex-wrap">
                  {["благодать.jpg", "лев.jpg", "ра.jpg", "лёха.jpg"].map((img, index) => (
                    <div className="p-4" key={index}>
                      <a className="card-body">
                        <img src={`../deps/images/developers/${img}`} className="card-img" alt="Text" />
                        <h5 className="card-title text-center">{["Артём", "Лев", "Алина", "Алексей"][index]}</h5>
                      </a>
                    </div>
                  ))}
                </div>
                <h3 className="text-center">Иногда хочется простого человеческого - зачёта...</h3>
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