// import images
import LogoImg from '../src/assets/img/header/logoJ.png';
import Hero from '../src/assets/img/hero/hero.jpg';
import OverviewProductImg from '../src/assets/productj.png';
import Feature1Img from '../src/assets/features.png';
import CtaImg1 from '../src/assets/img/cta/cta1.png';
import CtaImg2 from '../src/assets/img/cta/cta2.png';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Shop Now',
};

export const nav = [
  { name: 'About us', href: '/' },
  { name: 'Product', href: '/products' },
  { name: 'Contact us', href: '/' },
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
];

export const hero = {
  title: 'Cheap and quality goods',
  subtitle: 'wherever your location we are ready to deliver to the destination',
  btnText: 'SHOP NOW!',
  image: Hero,
};

export const overview = {
  productImg: OverviewProductImg,
  
};

export const features = {
  feature1: {
    pretitle: 'Alwalys online',
    title: 'Fast,Safe,and Real-time support',
    subtitle:
      'use the sure course only in the jumpstart',
    btnLink: 'Shop now',
    image: Feature1Img,
  }
};

export const testimonials = {
  title: 'What do they say about Jumpstart',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: 'we have 750 outlets in various countries',
  subtitle: 'use the sure course only in the jumpstart',
  btnText: 'SHOP NOW!',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Contact us', href: '/' },
    { name: 'Product', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'contact your email here and subscribe',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'About us',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2023 JumpStart',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
