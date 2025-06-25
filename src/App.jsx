import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Wrench,
  Monitor,
  Sun,
  Moon,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-xl text-primary"
            >
              Ashfaq Afzal Chowdhury (Fahim)
            </motion.div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Experience",
                  "Projects",
                  "Education",
                  "Contact",
                ].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item.toLowerCase()
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-primary">Ashfaq Afzal Chowdhury</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  Software Developer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Dedicated software developer with expertise in Spring Boot
                  Framework for REST APIs and Flutter for cross-platform mobile
                  applications. Committed to quality code and innovation.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground"
              >
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <a
                  href="https://github.com/aacfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/aacfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/aacfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated background circles */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    width: "120%",
                    height: "120%",
                    top: "-10%",
                    left: "-10%",
                  }}
                />

                {/* Secondary animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{
                    rotate: -360,
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    rotate: {
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    opacity: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    width: "110%",
                    height: "110%",
                    top: "-5%",
                    left: "-5%",
                  }}
                />

                {/* Profile image container */}
                <motion.div
                  className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-background"
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <motion.img
                    src="/portfolio/profile.jpg"
                    alt="Ashfaq Afzal Chowdhury"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <motion.div
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full"
                  animate={{
                    x: [-5, 5, -5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-muted/10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, scalable solutions and
              continuously learning new technologies.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed">
                I am a dedicated software developer with a Bachelor's degree in
                Computer Science and Engineering from American International
                University-Bangladesh. My expertise lies in developing robust
                REST APIs using Spring Boot and creating cross-platform mobile
                applications with Flutter.
              </p>
              <p className="text-lg leading-relaxed">
                Currently working as a Software Engineer at Golden Harvest
                Infotech Ltd., I have contributed to high-priority projects that
                significantly increased company profitability. I'm passionate
                about writing quality code and staying updated with the latest
                technologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    Bachelors in Computer Science and Engineering
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-semibold mb-2">Experience</h4>
                  <p className="text-muted-foreground">2+ Years</p>
                  <p className="text-muted-foreground">Software Development</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center shadow-lg">
                <Code className="h-32 w-32 text-primary animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "C#", "Dart"].map((skill) => (
                      <motion.div key={skill} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-metallic-accent text-metallic-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Spring Boot", "Flutter"].map((skill) => (
                      <motion.div key={skill} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-metallic-accent text-metallic-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "PostgreSQL"].map((skill) => (
                      <motion.div key={skill} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-metallic-accent text-metallic-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "Postman", "Jira"].map((skill) => (
                      <motion.div key={skill} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-metallic-accent text-metallic-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 bg-muted/10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and achievements
            </p>
          </motion.div>
          <div className="space-y-8">
            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Engineer</CardTitle>
                      <CardDescription className="text-lg">
                        Golden Harvest Infotech Ltd.
                      </CardDescription>
                    </div>
                    <motion.div variants={badgeVariants}>
                      <Badge className="bg-metallic-accent text-metallic-foreground">
                        Feb 2023 - Present
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <motion.li variants={itemVariants}>
                      • Implemented robust RESTful APIs using Spring Boot for
                      applications, ensuring seamless front-end to back-end
                      communication and optimal app performance.
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      • Contributed to the development of a high-priority
                      project, the Desktop and Mobile application, which
                      resulted in a significant increase in the company's
                      profitability.
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        Mobile Application Development Trainee
                      </CardTitle>
                      <CardDescription className="text-lg">
                        BASIS
                      </CardDescription>
                    </div>
                    <motion.div variants={badgeVariants}>
                      <Badge className="bg-metallic-accent text-metallic-foreground">
                        June 2022 - Sept 2022
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <motion.li variants={itemVariants}>
                      • 240 hours of training program on App development using
                      Flutter.
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      • Improved basics on Flutter Widgets, State Management,
                      REST API, and built several cross-platform mobile apps
                      under the supervision of trainers.
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Teaching Assistant Intern</CardTitle>
                      <CardDescription className="text-lg">
                        American International University-Bangladesh
                      </CardDescription>
                    </div>
                    <motion.div variants={badgeVariants}>
                      <Badge className="bg-metallic-accent text-metallic-foreground">
                        May 2021 - Aug 2021
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <motion.li variants={itemVariants}>
                      • Delivered assistance in the computer lab and guided
                      nearly 80 undergraduate students on topics in Web
                      Technology such as PHP, HTML, JavaScript, and tools like
                      Xampp, GitHub, etc.
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      • Improved the workflow of evaluation by helping the
                      professor to prepare course materials such as slides,
                      quizzes, and exams.
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of the projects I've worked on
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Hospital Management System
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>
                    Memorial Houston Medical Ltd.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Developed an EHR microservice using Spring Boot, laying the
                    foundation for secure and efficient patient record
                    management. Improved data accessibility, streamlined
                    hospital operations, and enabled future expansion with
                    additional modules.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Spring Boot
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Microservices
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Healthcare
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    BSCL Billing System
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>
                    Bangladesh Satellite Company Limited
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Contributed to a streamlined Online Bill Viewing System
                    using Spring Boot for Bangladesh Satellite Company Limited,
                    optimizing billing experience and operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Spring Boot
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Billing System
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Web Application
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Digital Archiving System
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>Desktop Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Developed a C desktop application with Nikon SDK integration
                    to capture images from a DSLR, apply image processing, audit
                    based on client criteria, and sync data with the cloud.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        C#
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Nikon SDK
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Image Processing
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Cloud Sync
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    MineStream
                    <a
                      href="https://github.com/aacfahim/minestream"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />{" "}
                    </a>{" "}
                  </CardTitle>
                  <CardDescription>Video Calling Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A video-calling cross-platform application using Flutter,
                    Firebase, and Jitsi Meet for seamless communication across
                    devices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Flutter
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Firebase
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Jitsi Meet
                      </Badge>
                    </motion.div>
                    <motion.div variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-metallic-accent text-metallic-foreground"
                      >
                        Cross-platform
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  WhatsApp Clone App
                  <a
                    href="https://eloquent-swan-befee6.netlify.app/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ExternalLink className="h-4 w-4" />{" "}
                  </a>
                </CardTitle>
                <CardDescription>Mobile and Web Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  WhatsApp Mobile and Web UI clone application built with
                  Flutter
                </p>
                <div className="flex flex-wrap gap-2">
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Flutter
                    </Badge>
                  </motion.div>
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Dart
                    </Badge>
                  </motion.div>
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Cross-Platform
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Instagram Clone App
                  <a
                    href="https://github.com/aacfahim/instagram-clone-flutter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
                <CardDescription>Mobile Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A mobile application that mimics the core features of
                  Instagram, allowing users to share photos, follow others, and
                  engage with content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Flutter
                    </Badge>
                  </motion.div>
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Dart
                    </Badge>
                  </motion.div>
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Cross-platform
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Text Recognition and Document Scanner
                  <a
                    href="https://github.com/aacfahim/text-recognition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
                <CardDescription>Mobile Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A mobile application that utilizes Google ML Kit to recognize
                  and extract text from images, providing users with a powerful
                  tool for digitizing printed content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Flutter
                    </Badge>
                  </motion.div>
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      Dart
                    </Badge>
                  </motion.div>
                  <motion.div variants={badgeVariants}>
                    <Badge
                      variant="outline"
                      className="bg-metallic-accent text-metallic-foreground"
                    >
                      {" "}
                      Google ML Kit
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20 bg-muted/10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              My academic background and qualifications
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <motion.div variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-metallic-light dark:border-metallic-dark">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        Bachelor of Science in Computer Science and Engineering
                      </CardTitle>
                      <CardDescription className="text-lg">
                        American International University-Bangladesh
                      </CardDescription>
                    </div>
                    <motion.div variants={badgeVariants}>
                      <Badge className="bg-metallic-accent text-metallic-foreground">
                        Nov 2021
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <motion.p
                      variants={itemVariants}
                      className="text-muted-foreground"
                    >
                      CGPA: 3.31 / 4.0
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-muted-foreground"
                    >
                      Verified by WES
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-muted-foreground"
                    >
                      Location: Dhaka, Bangladesh
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your next project or opportunity
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-8">
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-8"
              >
                <motion.a
                  variants={itemVariants}
                  href="mailto:aac.ashfaq@gmail.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>aac.ashfaq@gmail.com</span>
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="tel:+8801795606454"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+8801795606454</span>
                </motion.a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-2 text-muted-foreground"
              >
                <MapPin className="h-5 w-5" />
                <span>Dhaka, Bangladesh</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6"
              >
                <motion.a
                  variants={itemVariants}
                  href="https://github.com/aacfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-8 w-8" />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="https://linkedin.com/in/aacfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="https://facebook.com/aacfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-8 w-8" />
                </motion.a>
              </motion.div>
              {/* <motion.div variants={itemVariants} className="text-center">
                <Button size="lg" asChild>
                  <a href="mailto:aac.ashfaq@gmail.com">Send Message</a>
                </Button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-">
          <div className="text-center space-y-4">
            {/* Made with Love Section */}
            <motion.div variants={itemVariants}>
              <div className="text-center space-y-2">
                <motion.div
                  className="flex items-center justify-center space-x-2 text-muted-foreground"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-sm">Made with</span>
                  <motion.span
                    className="text-red-500 text-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ❤️
                  </motion.span>
                  <span className="text-sm">and lots of</span>
                  <motion.span
                    className="text-yellow-500 text-lg"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ☕
                  </motion.span>
                  <span className="text-sm">by Ashfaq</span>
                </motion.div>

                {/* Copyright */}
                <p className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} Ashfaq Afzal Chowdhury
                  (Fahim). All rights reserved.
                </p>

                {/* Version or Last Updated */}
                <p className="text-xs text-muted-foreground/70">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
