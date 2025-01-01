import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollTopButton";
import ExperiencesCard from "./components/ExperiencesCard";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import SendIcon from "./components/icons/SendIcon";
import GithubIcon from "./components/icons/GithubIcon";
import { saveAs } from "file-saver";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownload = () => {
    const isEnglish = i18n.language === "en";
    const fileUrl = isEnglish ? "/resume.pdf" : "/cv.pdf";
    const fileName = isEnglish
      ? "Pandu Wahyudi Resume.pdf"
      : "CV Pandu Wahyudi.pdf";
    saveAs(fileUrl, fileName);
  };
  return (
    <div>
      <Navbar />
      <div className="">
        <section
          id="about"
          className="min-h-screen bg-white flex justify-center items-center pb-6 px-4 md:pb-0 md:px-12 lg:px-24 lg:pb-0"
        >
          <div className="text-center flex flex-col items-center  md:flex-row-reverse md:justify-between md:items-center md:text-left md:gap-12 lg:gap-20">
            <div
              className="relative flex items-center justify-center w-[227px] h-[227px] md:w-[350px] md:h-[350px] mb-0 md:mb-0"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <div
                className="relative   flex items-center justify-center w-[202px] h-[202px] md:w-[297px] md:h-[297px]"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                <div className="rounded-full bg-[#EDF7FA] absolute w-[180px] h-[180px]  md:w-[270px] md:h-[270px]  bottom-0 left-[4.3%] md:left-2 md:bottom-0"></div>
                <img
                  className="rounded-full absolute w-[180px] h-[180px]  md:w-[270px] md:h-[270px] "
                  src="/img/profile.png"
                  alt="profile"
                />
              </div>
            </div>

            <div
              className="space-y-6 text-dark text-center md:text-left md:max-w-[600px]"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1 className="text-4xl font-bold leading-relaxed md:text-5xl md:leading-snug">
                {t("home.title")} <br /> {t("home.title1")}
              </h1>

              <p className="text-base max-w-[497px] mx-auto md:mx-0">
                {t("home.description")}
              </p>
              <button
                onClick={handleDownload}
                className="bg-primary hover:bg-blue-400 py-3 px-8 inline-block rounded-sm text-white font-medium text-xl "
              >
                {t("home.downloadResume")}
              </button>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen bg-[#EDF7FA] flex items-center justify-center"
        >
          <div className="space-y-5 p-4 md:space-y-10 md:p-0 text-center">
            <h3 className="text-dark font-bold text-3xl md:text-5xl">
              {t("home.skills.title")}
            </h3>
            <h5 className="text-dark mx-auto text-center max-w-[350px] md:max-w-[700px] ">
              {t("home.skills.description")}
            </h5>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-16">
              {[
                { src: "/img/html.png", alt: "html" },
                { src: "/img/CSS3.png", alt: "css" },
                { src: "/img/JavaScript.png", alt: "javascript" },
                { src: "/img/TypeScript.png", alt: "typescript" },
                { src: "/img/php.png", alt: "php" },
                { src: "/img/Laravel.png", alt: "laravel" },
                { src: "/img/React.png", alt: "react" },
                { src: "/img/Next.js.png", alt: "next.js" },
                { src: "/img/Bootstrap.png", alt: "bootstrap" },
                { src: "/img/Tailwind CSS.png", alt: "tailwind" },
              ].map((tool, index) => (
                <div key={index} data-aos="zoom-in" data-aos-duration="3000">
                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="project"
          className="min-h-screen bg-white flex items-center justify-center"
        >
          <div className="space-y-4 py-8 px-4 md:space-y-10 md:p-10">
            <h3 className="text-dark font-bold text-3xl text-center md:text-5xl md:text-left">
              Project
            </h3>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-10">
              <div data-aos="fade-up" data-aos-duration="3000">
                <ExperiencesCard
                  src="/img/experience.png"
                  title={t("home.experience.title1")}
                  duration="2024"
                  role="Fullstack Developer"
                  description={t("home.experience.description1")}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <ExperiencesCard
                  src="/img/experience2.png"
                  title={t("home.experience.title2")}
                  duration="2024"
                  role="Front-End Developer"
                  description={t("home.experience.description2")}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <ExperiencesCard
                  src="/img/experience3.png"
                  title={t("home.experience.title3")}
                  duration="2023"
                  role="Front-End Developer"
                  description={t("home.experience.description3")}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <ExperiencesCard
                  src="/img/experience4.png"
                  title={t("home.experience.title4")}
                  duration="2023"
                  role="Fullstack Developer"
                  description={t("home.experience.description4")}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full bg-[#EDF7FA] flex flex-col items-center justify-center px-4 pb-2 space-y-4 pt-2 md:pt-6 "
        >
          <div className=" w-full space-y-2 md:flex  md:items-center  md:space-x-20 md:pl-[15%] pb-[3%]">
            <h3 className="text-dark font-bold text-4xl md:text-6xl text-left leading-tight">
              {t("home.contact.title")} <br /> {t("home.contact.title1")}
            </h3>
            <div className="space-y-4 md:space-y-8 max-w-[500px]">
              <p className="text-dark">{t("home.contact.description")}</p>
              <a
                href="mailto:panduwahyudi12@gmail.com"
                className=" flex space-x-4 justify-center items-center py-2  text-white  bg-primary font-medium rounded-full max-w-48 hover:bg-dark  hover:text-primary transition-colors"
              >
                <p className="">{t("home.contact.emailMe")}</p>
                <p className="w-5 h-5">
                  <SendIcon />
                </p>
              </a>
            </div>
          </div>

          <div className="flex space-x-10 pt-4">
            <a
              href="https://github.com/PanduWahyudi"
              className="text-dark hover:text-primary w-5 h-5 md:w-8 md:h-8"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.instagram.com/panduwahyudi4"
              className="text-dark hover:text-primary w-5 h-5 md:w-8 md:h-8"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pandu-wahyudi-ba4975337"
              className="text-dark hover:text-primary w-5 h-5 md:w-8 md:h-8"
            >
              <LinkedinIcon />
            </a>
          </div>
        </section>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
