import React from "react";
import "../styles/services.css";
import img1 from "../../images/Services1.png"
import img2 from "../../images/Services2.png"
import img3 from "../../images/Services3.png"
import img4 from "../../images/Services4.png"
import img5 from "../../images/Services5.png"
import img6 from "../../images/Services6.png"
import img7 from "../../images/Services7.png"

const servicesData = [
  {
    title: "Consulting Services:",
    items: [
      "Genetic Analysis and Biomarker identification",
      "AI optimization in Aquaculture",
    ],
  },
  {
    title: "Custom Research:",
    items: [
      "Personalized Nutrition Plans",
      "Disease Resistance in Aquatic species",
    ],
  },
  {
    title: "Training Programs:",
    items: [
      "AI in agriculture",
      "Genetic Research Techniques",
      "Aquaculture Best practices",
    ],
  },
  {
    title: "Precision Nutrition System:",
    items: [
      "Genetic Screening",
      "Personalized Recommendations",
      "Ongoing Monitoring",
    ],
  },
];

const Services = () => {
  return (
    <>
      <div className="aquaculture-container">
        <header className="header">
          <div className="col-md-12">
          <div className="gradient-background flex items-center justify-center font-semibold">
       
      </div>
     
            <img src={img1} alt="Services1" />
           </div>

          <div className="gradient-background flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Services</h1>
        </div>

          
        </header>
        <section className="aquaculture-section">
          <div className="image">
            <img src={img2} alt="Services2" />
          </div>
          <div className="content">
            <h2 className="whatwedo ">What We Do</h2>
            <h3>Aquaculture Solutions</h3>

            <div className="services">
              {servicesData.map((service, index) => (
                <div key={index} className="service">
                  <h4>{service.title}</h4>
                  <ul>
                    {service.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="container-service">
        <div className="row">
          <div className="col-md-3">
            <div className="card-x">
              <img
                src={img3}
                className="card-img-top"
                alt="Services3"
              />
              <div className="card-body">
                <h5 className="card-title">Consulting</h5>
                <p className="card-text">
                  Businesses and academic institutions can engage AGAC for
                  custom research projects tailored to their specific needs and
                  objectives. Our multidisciplinary team collaborates closely
                  with clients to design and execute research that delivers
                  impactful results.
                </p>
                <a href="#" className="btn btn-primary text-white">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-x">
              <img
                src={img4}
                className="card-img-top"
                alt="Services4"
              />
              <div className="card-body">
                <h5 className="card-title">Custom Research</h5>
                <p className="card-text">
                  Businesses and academic institutions can engage AGAC for
                  custom research projects tailored to their specific needs and
                  objectives. Our multidisciplinary team collaborates closely
                  with clients to design and execute research that delivers
                  impactful results.
                </p>
                <a href="#" className="btn btn-primary text-white">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-x">
              <img
                src={img5}
                className="card-img-top"
                alt="Services5"
              />
              <div className="card-body">
                <h5 className="card-title">Training Programs</h5>
                <p className="card-text">
                  AGAC provides a range of training programs, including
                  workshops, seminars, and online courses. These programs
                  educate professionals on the latest developments in AI,
                  genetic research, and aquaculture techniques, supporting
                  continuous learning and skill development.
                </p>
                <a href="#" className="btn btn-primary text-white">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-x">
              <img
                src={img6}
                className="card-img-top"
                alt="Services6"
              />
              <div className="card-body">
                <h5 className="card-title-precision">Precision Nutrition System</h5>
                <p className="card-text">
                  The Precision Nutrition System™ uses genetic and health data
                  to develop personalized nutrition plans. These plans aim to
                  optimize individual health outcomes by recommending dietary
                  adjustments based on genetic predispositions and health
                  conditions.
                </p>
                <a href="#" className="btn btn-primary text-white ">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-md-12">
            <div className="video-container">
              <img
                src={img7}
                className="img-fluid"
                alt="Services7"
              />
              <div className="video-overlay">
                <div className="play-button">▶</div>
                <div className="video-text">Watch this video</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-md-10">
            <div className="bg-success rounded-2xl text-center p-3">
              <h1 className="text-light">Aquaponics Market Leaders</h1>
              <h2 className="text-l">
                We're popular in aquaponics market globally
              </h2>
              <a href="#" className="btn btn-warning mt-3">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
