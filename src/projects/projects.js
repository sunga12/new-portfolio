import CIW from '../assets/images/CIW.png';
import TVS from '../assets/images/TVS API Dark.png';
import SPH from '../assets/images/Thumbnail SPH.jpg';
import RSS from '../assets/images/rss-square.png';
import MMC from '../assets/images/MM-Calc.png';
import BS from '../assets/images/BS.png';
import CRS from '../assets/images/CRS.jpg';
import RaRe from '../assets/images/RaRe.jpg';
import DF from '../assets/images/Proj3-bg.png';

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
    featuredImage: DF,
    technologies: [['HTML'], ['Bootstrap'], ['Rails']],
    liveLink: 'https://smartspendr-budget-app.onrender.com/',
    sourceLink: 'https://github.com/sunga12/Smartspendr',
    category: 'Full-Stack',
    deployed: true,
  },
  {
    name: 'Bookstore',
    description: 'A basic website that displays books and their details using an API. It also allows users to Add Books to the Store with a name and author, with the option to remove the book. Each book also has a progress circle that displays the current reading progress.',
    featuredImage: BS,
    technologies: [['React'], ['Redux'], ['CSS3']],
    liveLink: '#',
    sourceLink: 'https://github.com/sunga12/bookstore/',
    category: 'Front-End',
    deployed: false,
  },
  {
    name: 'My Catalog',
    description: 'A console app that will help you to keep a record of different types of things you own: books, music albums, and games. All data is preserved.',
    featuredImage: DF,
    technologies: [['Ruby']],
    liveLink: '#',
    sourceLink: 'https://github.com/K0ppai/My-Catalog',
    category: 'Back-End',
    deployed: false,
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
  {
    name: 'Rails Recipes',
    description: 'A web application crafted with Ruby on Rails and powered by PostgreSQL. This platform is designed to make recipe creation, discovery, and sharing a seamless experience. With this app, users can easily document and share their favorite recipes in an engaging blog-style format.',
    featuredImage: RaRe,
    technologies: [['Rails'], ['Bootstrap'], ['PostgreSQL']],
    liveLink: '#',
    sourceLink: 'https://github.com/sunga12/Recipe-App-RoR',
    category: 'Full-Stack',
    deployed: false,
  },
];

export default Projects;
