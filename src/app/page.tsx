"use client";
import ImageAccordion from '@/components/accordions/ImageAccordion';
import AnchorLink from '@/components/common/AnchorLink';
import FooterLogo from '@/components/footer/FooterLogo';
import GradientFooter from '@/components/footer/GradientFooter';
import SimpleNavbar from '@/components/navigation/SimpleNavbar';

const items = [
  { title: 'What is the product?', content: 'This is a brief description of the product.' },
  { title: 'How does it work?', content: 'This is a brief explanation of how the product functions.' },
  { title: 'What are the benefits?', content: 'This outlines the advantages of the product.' },
  { title: 'How to purchase?', content: 'Instructions on how to buy the product.' },
  { title: 'Contact support', content: 'Information on how to get support.' }
];

export default function Home() {
  return (
    <div>
      <SimpleNavbar logoSrc="/images/logo.svg" logoWidth={100} logoHeight={40} buttonText="Get Started" onButtonClick={() => {}} className="bg-white" />
      <section id="hero" className="flex flex-col items-center justify-center p-10 bg-blue-500 text-white">
        <h1 className="text-5xl font-bold">Welcome to Our Product</h1>
        <p className="text-2xl">Your solution for XYZ problems.</p>
        <AnchorLink href="#about" className="mt-5 text-white underline">Learn More</AnchorLink>
      </section>
      <section id="about" className="py-10">
        <ImageAccordion items={items} imageSrc="/images/about.jpg" imageAlt="About Us Image" title="Frequently Asked Questions" className="bg-white" />
      </section>
      <footer className="bg-gray-800 text-white p-5">
        <GradientFooter logoSrc="/images/logo.svg" logoAlt="Logo" logoText="Our Company" items={[{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }]} className="py-5" containerClassName="flex justify-around" gradientClassName="bg-gradient-to-r from-blue-500 to-green-500" logoClassName="h-10" itemsClassName="flex flex-col" itemClassName="py-2" buttonClassName="px-3 py-1 rounded bg-green-500" />
      </footer>
    </div>
  );
}