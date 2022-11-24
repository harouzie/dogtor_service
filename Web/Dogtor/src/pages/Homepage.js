import { useCallback } from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const onFrameContainer5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer11Click = useCallback(() => {
    // Please sync "Login screen" to the project
  }, []);

  const onMakeAppointmentClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homepageDiv}>
      <div className={styles.heroDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.logoDiv}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-1.svg"
                />
                <div className={styles.groupDiv1}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.rectangleDiv1} />
                </div>
              </div>
              <b className={styles.dOGTORB}>DOGTOR</b>
            </div>
            <div className={styles.menuItemsDiv}>
              <div className={styles.frameDiv2}>
                <b className={styles.homeB}>{`Home `}</b>
              </div>
              <div
                className={styles.frameDiv3}
                onClick={onFrameContainer5Click}
              >
                <div className={styles.frameDiv4}>
                  <div className={styles.aboutUsDiv}>About us</div>
                </div>
              </div>
              <div
                className={styles.frameDiv5}
                onClick={onFrameContainer7Click}
              >
                <div className={styles.frameDiv6}>
                  <div className={styles.aboutUsDiv}>Our services</div>
                </div>
              </div>
              <div
                className={styles.frameDiv7}
                onClick={onFrameContainer9Click}
              >
                <div className={styles.frameDiv6}>
                  <div className={styles.contactUsDiv}>Contact us</div>
                </div>
              </div>
              <div
                className={styles.frameDiv9}
                onClick={onFrameContainer11Click}
              >
                <div className={styles.frameDiv10}>
                  <div className={styles.loginSignUp}>Login / Sign up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.notostethoscopeIcon}
          alt=""
          src="../notostethoscope.svg"
        />
        <img
          className={styles.homepageDesignIcon}
          alt=""
          src="../homepage-design.svg"
        />
        <div className={styles.frameDiv11}>
          <b className={styles.completeHealthCareSolutions}>
            <p className={styles.completeHealth}>Complete Health</p>
            <p className={styles.completeHealth}>{`Care Solutions for `}</p>
            <p className={styles.everyoneP}>Everyone</p>
          </b>
        </div>
        <div className={styles.wereAlwaysAvailableForOur}>
          <p className={styles.completeHealth}>
            We're always available for our Patients with emergen problems.
          </p>
          <p className={styles.everyoneP}>
            You can easily reach us 24/7. We focused on highest quality.
          </p>
        </div>
        <div
          className={styles.makeAppointment}
          onClick={onMakeAppointmentClick}
        >
          <div className={styles.makeAppointmentDiv}>Make Appointment</div>
        </div>
        <img
          className={styles.claritymouseLineIcon}
          alt=""
          src="../claritymouseline.svg"
        />
        <img className={styles.rectangleIcon} alt="" src="../rectangle-3.svg" />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-4.svg"
        />
      </div>
      <img
        className={styles.icoutlineHealthAndSafetyIcon}
        alt=""
        src="../icoutlinehealthandsafety.svg"
      />
      <div className={styles.frameDiv12} data-scroll-to="frameContainer1">
        <b className={styles.ourServicesB}>Our Services</b>
        <div className={styles.weOfferDifferentServicesTo}>
          <p
            className={styles.completeHealth}
          >{`We Offer Different Services `}</p>
          <p className={styles.everyoneP}>To Improve Your Health</p>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.frameDiv13}>
          <img
            className={styles.fa6SoliduserDoctorIcon}
            alt=""
            src="../fa6soliduserdoctor.svg"
          />
          <b className={styles.expertDoctorB}>Expert Doctor</b>
          <div className={styles.weHaveATeamOfExpertSpeci}>
            <p className={styles.completeHealth}>We have a team of expert</p>
            <p className={styles.everyoneP}>specialist doctor.</p>
          </div>
        </div>
        <div className={styles.frameDiv14}>
          <b className={styles.diagnosisB}>Diagnosis</b>
          <div className={styles.bestMedicalEquipmentUsedTo}>
            <p className={styles.completeHealth}>{`Best medical equipment `}</p>
            <p className={styles.everyoneP}>used to diagnosis.</p>
          </div>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        </div>
        <div className={styles.frameDiv15}>
          <img
            className={styles.medicalIconiCardiology}
            alt=""
            src="../medicaliconicardiology.svg"
          />
          <b className={styles.cardiologyB}>Cardiology</b>
          <div className={styles.weHaveATeamOfExpertSpeci}>
            <p className={styles.completeHealth}>We have a team of expert</p>
            <p className={styles.everyoneP}>cardiology doctor.</p>
          </div>
        </div>
        <div className={styles.frameDiv16}>
          <div className={styles.faSoliddiagnosesDiv} />
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          <b className={styles.diagnosisB1}>Diagnosis</b>
          <div className={styles.bestMedicalEquipmentUsedTo1}>
            <p className={styles.completeHealth}>Best medical equipment</p>
            <p className={styles.everyoneP}>used to diagnosis.</p>
          </div>
          <div className={styles.frameDiv17}>
            <div className={styles.appointmentDiv}>Appointment</div>
          </div>
        </div>
        <div className={styles.frameDiv18}>
          <img
            className={styles.rimedicineBottleFillIcon}
            alt=""
            src="../rimedicinebottlefill.svg"
          />
          <b className={styles.medicineB}>Medicine</b>
          <div className={styles.sepcialistPharmasistSuggest}>
            <p className={styles.completeHealth}>Sepcialist pharmasist</p>
            <p className={styles.everyoneP}>suggest best medicine</p>
          </div>
        </div>
        <div className={styles.frameDiv19}>
          <img
            className={styles.fontistobloodDropIcon}
            alt=""
            src="../fontistoblooddrop.svg"
          />
          <b className={styles.pathologyB}>Pathology</b>
          <div className={styles.highlySpecializedMDOrDOPh}>
            <p className={styles.completeHealth}>{` Highly specialized MD `}</p>
            <p className={styles.everyoneP}>{`or DO physician. `}</p>
          </div>
        </div>
        <div className={styles.frameDiv20}>
          <img
            className={styles.healthiconsneurology}
            alt=""
            src="../healthiconsneurology.svg"
          />
          <b className={styles.neurologyB}>Neurology</b>
          <div className={styles.weHaveATeamOfExpertSpeci1}>
            <p className={styles.completeHealth}>We have a team of expert</p>
            <p className={styles.everyoneP}>specialist doctor.</p>
          </div>
        </div>
        <div className={styles.frameDiv21}>
          <img
            className={styles.medicalIconiDental}
            alt=""
            src="../medicaliconidental.svg"
          />
          <b className={styles.dentalCareB}>Dental care</b>
          <div className={styles.maintainTheOverallHealthOf}>
            <p className={styles.completeHealth}>{`Maintain the overall `}</p>
            <p className={styles.everyoneP}>health of your mouth.</p>
          </div>
        </div>
        <div className={styles.frameDiv22}>
          <img
            className={styles.faambulanceIcon}
            alt=""
            src="../faambulance.svg"
          />
          <b className={styles.ambulance}>Ambulance</b>
          <div className={styles.emergencyServiceJustCallUs}>
            <p className={styles.completeHealth}>24/7 emergency service</p>
            <p className={styles.everyoneP}>just call us.</p>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv23} data-scroll-to="frameContainer2">
        <div className={styles.dogtorIsAnOnlineHealthcare}>
          <p className={styles.completeHealth}>
            Dogtor is an online healthcare provider, Offering health solutions
          </p>
          <p className={styles.everyoneP}>
            and advice to over 30,000 patients across Vietnam.
          </p>
        </div>
        <div className={styles.withATeamOfLicensedDoctor}>
          <p className={styles.completeHealth}>
            With a team of licensed doctors and pharmasists, Dogtor aim to
          </p>
          <p className={styles.completeHealth}>
            provide comprihensive medical consultation services for patients
          </p>
          <p className={styles.everyoneP}>and doctors alike.</p>
        </div>
        <div className={styles.div}>...</div>
        <div className={styles.rectangleDiv2} />
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="../rectangle-6@2x.png"
        />
        <b className={styles.whoWeAre}>Who we are?</b>
        <b className={styles.knowMoreB}>Know more</b>
        <img
          className={styles.antDesignarrowRightOutlineIcon}
          alt=""
          src="../antdesignarrowrightoutlined.svg"
        />
        <div className={styles.shortStoryAboutDogtor}>
          <p className={styles.completeHealth}>Short story about</p>
          <p className={styles.everyoneP}>Dogtor</p>
        </div>
        <img
          className={styles.biplayCircleIcon}
          alt=""
          src="../biplaycircle.svg"
        />
      </div>
      <img className={styles.frameIcon} alt="" src="../frame-25@2x.png" />
      <div className={styles.frameDiv24}>
        <div className={styles.rectangleDiv3} />
        <img
          className={styles.simpleLineIconscalender}
          alt=""
          src="../simplelineiconscalender.svg"
        />
        <div className={styles.rectangleDiv4} />
        <div className={styles.rectangleDiv5} />
        <img
          className={styles.healthiconsdoctorMaleOutlin}
          alt=""
          src="../healthiconsdoctormaleoutline.svg"
        />
        <img
          className={styles.heroiconsOutlineemojiHappy}
          alt=""
          src="../heroiconsoutlineemojihappy.svg"
        />
        <div className={styles.happyPatientsDiv}>Happy patients</div>
        <div className={styles.experiencedDoctorsDiv}>Experienced doctors</div>
        <div className={styles.yearsOfExperience}>Years of experience</div>
        <b className={styles.b}>30,000+</b>
        <b className={styles.b1}>69+</b>
        <b className={styles.b2}>10+</b>
      </div>
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv7} />
      <img
        className={styles.rectangleIcon3}
        alt=""
        src="../rectangle-13@2x.png"
      />
      <div className={styles.rectangleDiv8} data-scroll-to="rectangle" />
      <div className={styles.enterEmailHere}>Enter email here</div>
      <div className={styles.getAllTheLatestOffersAnd}>
        Get all the latest offers and updates form us
      </div>
      <div className={styles.getNotificationsDiv}>Get notifications</div>
      <div className={styles.logoDiv1}>
        <div className={styles.groupDiv}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleDiv1} />
          </div>
        </div>
        <b className={styles.dOGTORB}>Dogtor</b>
      </div>
      <img className={styles.bxsuserIcon} alt="" src="../bxsuser.svg" />
      <div className={styles.bxsuserDiv}>
        <div className={styles.carbonphoneVoiceFilledDiv} />
      </div>
      <div className={styles.groupDiv4}>
        <b className={styles.needConsultationB}>Need consultation?</b>
        <b className={styles.nameB}>
          <span>Name</span>
          <span className={styles.span}>*</span>
        </b>
        <b className={styles.emailB}>
          <span>Email</span>
          <span className={styles.span1}>*</span>
        </b>
        <b className={styles.phoneB}>
          <span>Phone</span>
          <span className={styles.span1}>*</span>
        </b>
        <div className={styles.enterNameHere}>Enter name here</div>
        <div className={styles.enterEmailHere1}>Enter email here</div>
        <div className={styles.enterPhoneNoHere}>Enter phone no. here</div>
        <div className={styles.selectServiceDiv}>Select service</div>
        <div className={styles.bookAnAppointment}>Book an appointment</div>
        <img className={styles.bxsuserIcon1} alt="" src="../bxsuser1.svg" />
        <img className={styles.bxsuserIcon2} alt="" src="../bxsuser2.svg" />
        <div className={styles.lineDiv1} />
        <div className={styles.lineDiv2} />
        <div className={styles.lineDiv3} />
        <div className={styles.lineDiv4} />
        <img
          className={styles.fa6SolidangleDownIcon}
          alt=""
          src="../fa6solidangledown.svg"
        />
        <img
          className={styles.faSolidclinicMedicalIcon}
          alt=""
          src="../fasolidclinicmedical.svg"
        />
        <div className={styles.makeAppointment1}>
          <div className={styles.submitDiv}>Submit</div>
        </div>
        <b className={styles.serviceB}>
          <span>Service</span>
          <span className={styles.span1}>*</span>
        </b>
        <img className={styles.bxsuserIcon3} alt="" src="../bxsuser3.svg" />
        <img className={styles.eventNoteIcon} alt="" src="../event-note.svg" />
      </div>
      <div className={styles.rectangleDiv11} />
      <div className={styles.rectangleDiv12} />
      <div className={styles.subscribeDiv}>Subscribe</div>
      <div className={styles.frameDiv25} data-scroll-to="frameContainer">
        <img
          className={styles.carbonlocationFilledIcon}
          alt=""
          src="../carbonlocationfilled.svg"
        />
        <div className={styles.logoDiv2}>
          <div className={styles.groupDiv}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
            <div className={styles.groupDiv1}>
              <div className={styles.rectangleDiv} />
              <div className={styles.rectangleDiv1} />
            </div>
          </div>
          <b className={styles.dOGTORB}>Dogtor</b>
        </div>
        <div className={styles.theresNothingInThisStory}>
          <p
            className={styles.completeHealth}
          >{`There’s nothing in this story to make us think `}</p>
          <p className={styles.everyoneP}>we are dreaming of good health.</p>
        </div>
        <div className={styles.nguyenHuuThoTanHungWard}>
          <p className={styles.completeHealth}>19 Nguyen Huu Tho,</p>
          <p className={styles.completeHealth}>Tan Hung ward, district 7,</p>
          <p className={styles.completeHealth}>Ho Chi Minh city</p>
        </div>
        <div className={styles.aboutUsDiv1}>About us</div>
        <div className={styles.diagnosisDiv}>Diagnosis</div>
        <div className={styles.servicesDiv}>Services</div>
        <div className={styles.pathologyDiv}>Pathology</div>
        <div className={styles.appointmentDiv1}>Appointment</div>
        <div className={styles.dentalDiv}>Dental</div>
        <div className={styles.doctorsDiv}>Doctors</div>
        <div className={styles.termsAndConditionsPrivacy}>
          Terms and Conditions | Privacy policy
        </div>
        <div className={styles.medicineDiv}>Medicine</div>
        <div className={styles.cardiologyDiv}>Cardiology</div>
        <div className={styles.neurologyDiv}>Neurology</div>
        <div className={styles.allRightsReservedToDogtor}>
          © All rights reserved to Dogtor 2022
        </div>
        <div className={styles.div1}>+84 123 456 789</div>
        <div className={styles.div2}>+84 123 456 789</div>
        <b className={styles.contactUsB}>Contact us</b>
        <b className={styles.usefulLinksB}>Useful links</b>
        <b className={styles.ourServicesB1}>Our services</b>
        <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        <img className={styles.instagramIcon} alt="" src="../instagram.svg" />
        <img className={styles.youtubeIcon} alt="" src="../youtube.svg" />
        <img className={styles.facebookIcon} alt="" src="../facebook.svg" />
      </div>
      <div className={styles.fieldDiv}>
        <div className={styles.brieflyDescribeYourSymptoms}>
          <span>Briefly describe your symptoms</span>
          <span className={styles.span1}>*</span>
        </div>
      </div>
      <img className={styles.dogtorIcon} alt="" src="../dogtor@2x.png" />
      <img className={styles.evaphoneCallFillIcon} alt="" />
      <img className={styles.heroiconsOutlineemojiHappy1} alt="" />
      <img className={styles.fontistobloodDropIcon1} alt="" />
    </div>
  );
};

export default Homepage;
