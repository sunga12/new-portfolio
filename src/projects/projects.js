import CIW from '../assets/images/CIW.png';
import TVS from '../assets/images/TVS API Dark.png';
import SPH from '../assets/images/Thumbnail SPH.jpg';
import RSS from '../assets/images/rss-square.png';
import MMC from '../assets/images/MM-Calc.png';
import CRS from '../assets/images/CRS.jpg';
import SPN from '../assets/images/SPN1.png';

const Projects = [
  {
    name: 'Country Insights Web-App',
    description: 'A basic webapp that displays countries and their various details, & allows users to Navigate between the home page and details page, depending on the country of their choice.',
    featuredImage: CIW,
    technologies: [['React'], ['Redux'], ['CSS3']],
    liveLink: 'https://country-insights-webapp.onrender.com/',
    sourceLink: 'https://github.com/sunga12/country-insights-webapp',
    category: 'Front-End',
    deployed: true,
  },
  {
    name: 'Space Travellers Hub',
    description: ' A Group project as Part of the Microverse Full-Stack Curriculum, allowing users to view and make reservations for Rockets, & join and become members of any desired Space Mission.',
    featuredImage: SPH,
    technologies: [['React'], ['Redux'], ['CSS3']],
    liveLink: 'https://ankitt-26k-space-travelers-hub.onrender.com/',
    sourceLink: 'https://github.com/ankitt26/Space-Travelers-Hub',
    category: 'Front-End',
    deployed: true,
  },
  {
    name: 'TV-Show API',
    description: 'A website built using ES6 that used the fetch API to display information About TV Shows with the capability to add comments, likes, and make reservations (Group Project)',
    featuredImage: TVS,
    technologies: [['HTML5'], ['CSS3'], ['ES6']],
    liveLink: 'https://waelelsafty07.github.io/JavaScript-capstone-project/dist/',
    sourceLink: 'https://github.com/waelelsafty07/JavaScript-capstone-project',
    category: 'Front-End',
    deployed: true,
  },
  {
    name: 'Royal School Website',
    description: 'School Website Designed using the Cindy Shen Template on Behance. Located in Ndola, Zambia, Royal is proud to offer a supportive and inclusive community that values diversity, creativity, and environmental responsibility. Explore the website and learn more about how Royal Primary & Secondary School can help your child reach their full potential.',
    featuredImage: RSS,
    technologies: [['CSS3'], ['HTML5'], ['Javascript']],
    liveLink: 'https://sunga12.github.io/Capstone-project-1/',
    sourceLink: 'https://github.com/sunga12/Capstone-project-1',
    category: 'Front-End',
    deployed: true,
  },
  {
    name: 'Math Magicians',
    description: 'A Simple SPA that has 3 Sections. A Home page to tell you a little about myself, a Calculator, and a Random Quote generator the gives you a new quote each time you navigate to the quotes page, through a fetch request from the API-Ninja API. ',
    featuredImage: MMC,
    technologies: [['React'], ['CSS3'], ['HTML5']],
    liveLink: 'https://math-magicians-2hlc.onrender.com',
    sourceLink: 'https://github.com/sunga12/maths-magic',
    category: 'Front-End',
    deployed: true,
  },
  {
    name: 'SmartSpendr',
    description: 'A web application crafted with Ruby on Rails and powered by PostgreSQL. This App is designed to help you spend smarter, and budget better! It helps you to track your expenditures across the different categories they fall into, to help you see where all your money is "disappearing" to!',
    featuredImage: SPN,
    technologies: [['HTML'], ['Bootstrap'], ['Rails']],
    liveLink: 'https://smartspendr-budget-app.onrender.com/',
    sourceLink: 'https://github.com/sunga12/Smartspendr',
    category: 'Full-Stack',
    deployed: true,
  },
  {
    name: 'Car Reservations',
    description: 'A Full-stack Web App built with Ruby on Rails and PostgreSQL for the Back-end API and React & Redux for the Front-end. The App allows users to Sign-Up/Login and View/Reserve a car for a test drive in various locations around the world. Users are also able to add cars that will be made available for reservation.',
    featuredImage: CRS,
    technologies: [['Rails'], ['CSS3'], ['React'], ['PostgreSQL']],
    liveLink: 'https://car-booking-frontend.onrender.com/',
    sourceLink: 'https://github.com/hmunish/final-capstone-frontend',
    category: 'Full-Stack',
    deployed: true,
  },
];

export default Projects;
