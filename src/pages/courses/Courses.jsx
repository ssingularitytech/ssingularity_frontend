import React, { useState, useEffect } from 'react';
import '../../App.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PreLoader from '../../components/preloader/PreLoader';
import commingSoonImg from '../../img/comming-soon.svg';
import './Courses.css';
import BackToTop from '../../components/backtotop/BackToTop';

export const Courses = () => {
    const [loader, setLoader] = useState(true);
    const links = [
      {
          url: 'https://adapt.ssingularity.co.in',
          name: 'Adapt',
          description: "Course description"
      },
      {
          url: 'https://daim.ssingularity.co.in',
          name: 'DAIM',
          description: "Course description"
      },
      {
          url: 'https://deliver.ssingularity.co.in',
          name: 'Deliver',
          description: "Course description"
      },
      {
          url: 'https://engage.ssingularity.co.in',
          name: 'Engage',
          description: "Course description"
      },
      {
          url: 'https://gst.ssingularity.co.in',
          name: 'GST',
          description: "Course description"
      },
      {
          url: 'https://iaos.ssingularity.co.in',
          name: 'IAOS',
          description: "Course description"
      },
      {
          url: 'https://influence.ssingularity.co.in',
          name: 'Influence',
          description: "Course description"
      },
      {
          url: 'https://kyc.ssingularity.co.in',
          name: 'KYC',
          description: "Course description"
      },  
      {
          url: 'https://leverage.ssingularity.co.in',
          name: 'Leverage',
          description: "Course description"
      },  
      {
          url: 'https://ngo.ssingularity.co.in',
          name: 'NGO',
          description: "Course description"
      },  
      {
          url: 'https://sample1.ssingularity.co.in',
          name: 'Sample 1',
          description: "Course description"
      },  
      {
          url: 'https://sample2.ssingularity.co.in',
          name: 'Sample 2',
          description: "Course description"
      },  
      {
          url: 'https://sample3.ssingularity.co.in',
          name: 'Sample 3',
          description: "Course description"
      },  
      {
          url: 'https://sample4.ssingularity.co.in',
          name: 'Sample 4',
          description: "Course description"
      },  
      {
          url: 'https://sample5.ssingularity.co.in',
          name: 'Sample 5',
          description: "Course description"
      },  
    ]
    const checkLoader = () => {
        if (Header && Footer) {
            setLoader(false);
        }
        else {
            setLoader(true);
        }
    }
    useEffect(() => {
        document.title = "Comming Soon SSingularity";
        setInterval(checkLoader, 3500);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    return (
        <div className="App">
            {loader ? < PreLoader /> : null}
            <Header />
            <div className="container course" data-aos="fade-up">
              <div className="section-title">
                <h1>Courses</h1>
              </div>
              <div className="course-container" data-aos="fade-up" data-aos-delay="200">
                {
                  links.map(link => (
                    <div className="course-content d-flex">
                      <div className="course-details d-flex">
                        <div className="contentBlock">
                          <h4>{link.name}</h4>
                          <p>
                            {link.description}
                          </p>
                          <div className="social-icons">
                            <a href={link.url} target="_blank">Show more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

                <div class="loader">
                    <div class="loaderBar"></div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </div>
    )


}


export default Courses;