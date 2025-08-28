import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
// import { Image } from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCategory2, setActiveCategory2] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Loop Jewelry",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/loop-jewelry.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://loopjewelry.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 2,
      title: "Little Words Project",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/lwp.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.littlewordsproject.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 3,
      title: "Effortless ",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/effortless.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://themes.shopify.com/themes/effortless/styles/trend",
      showGithub: false,
      githubUrl: "",
      category2: "Theme",
    },
    {
      id: 4,
      title: "Presonus",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/presonus.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://intl.presonus.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Tech",
    },
    {
      id: 5,
      title: "Pop Sockets (Philipines)",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/popsockets-ph.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://popsockets.ph/",
      showGithub: false,
      githubUrl: "",
      category2: "Tech",
    },
    {
      id: 6,
      title: "US Carrera world",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/carrera.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://us.carreraworld.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Glasses",
    },
    {
      id: 7,
      title: "RSVLTS",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/rsvlts.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.rsvlts.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 8,
      title: "Nestosh",
      category: "nextjs",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/nestosh.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://nestosh.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Corporate, SaaS",
    },
    {
      id: 9,
      title: "Stand Shoes",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/stand-shoes.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.standshoes.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Fashion, Shoes",
    },
    {
      id: 10,
      title: "Pop Sockets (Japan)",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/popsockets-jpn.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://popsockets.co.jp/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Lifestyle",
    },
    {
      id: 11,
      title: "Pop Sockets (Korea)",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/popsockets-korea.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://popsockets.co.kr/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Lifestyle",
    },
    {
      id: 12,
      title: "Pop Sockets (EU)",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/popsockets-promo.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://popsockets-promo.eu/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Lifestyle",
    },
    {
      id: 13,
      title: "Pop Sockets (Fund raising)",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/popsockets-fr.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://popsocketsfundraising.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Lifestyle",
    },
    {
      id: 14,
      title: "Teehatch",
      category: "shopifyapps",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/teehatch.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.teehatch.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Shopify App",
    },
    {
      id: 15,
      title: "Lunaone",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/lunaone.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://lunaone.com/",
      showGithub: false,
      githubUrl: "",
      category2: "WordPress, BlockChain, Crypto",
    },
    {
      id: 16,
      title: "Living Proof",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/living-proof.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://pro.livingproof.com",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare",
    },
    {
      id: 17,
      title: "Murad Skincare",
      category: "bigcommerce",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/murad.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.murad.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare",
    },
    {
      id: 18,
      title: "Bachir Oueida",
      category: "nextjs",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/bachiroueida.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://bachiroueida.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Real Estate, Business",
    },
    {
      id: 19,
      title: "BuckPalmer",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/buck.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://buckpalmer.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 20,
      title: "APT2B",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/apt2b.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.apt2b.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Furniture",
    },
    {
      id: 21,
      title: "Custom Barres",
      category: "bigcommerce",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/custombarres.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.custombarres.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Athleisure, Gym, Fitness",
    },
    {
      id: 22,
      title: "Axiom Knight",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/axiom-knight.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://axiomknight.com/",
      showGithub: false,
      githubUrl: "",
      category2: "WordPress, SaaS, Business",
    },
    {
      id: 23,
      title: "Penny preville",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/penny.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://pennypreville.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 24,
      title: "Ren Skincare",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/renskincare.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.renskincare.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare",
    },
    {
      id: 25,
      title: "Coordinates collection",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/coordinates-collection.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.coordinatescollection.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 26,
      title: "Mott Optical",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/mott.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.mottoptical.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Glasses",
    },
    {
      id: 27,
      title: "Uber Pong",
      category: "bigcommerce",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/uberpong.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://uberpong.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sports, Gaming",
    },
    {
      id: 28,
      title: "Happyicela",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/happyice.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.happyicela.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sweets, Apparel",
    },
    {
      id: 29,
      title: "Ethelm Chocolates",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/ethelm.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.ethelm.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sweets, Apparel",
    },
    {
      id: 30,
      title: "Mintel",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/mintel.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://mintel.pk/",
      showGithub: false,
      githubUrl: "",
      category2: "Tech, Accessories",
    },
    {
      id: 31,
      title: "Zobooutsourcing",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/zobo.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.zobooutsourcing.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Outsourcing",
    },
    {
      id: 32,
      title: "Ixora Apparel",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/ixora.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://ixoraapparel.com",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 33,
      title: "Pantrei",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/pantrei.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.pantrei.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 34,
      title: "Mottandbayard",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/mottandbayard.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.mottandbayard.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Glasses",
    },
    {
      id: 35,
      title: "Arestool",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/arestool.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.arestool.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Hardware Tools",
    },
    {
      id: 36,
      title: "Sonovia shop",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/sonovia.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://sonoviashop.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 37,
      title: "With love lenny",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/lenny.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://withlovelenny.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 38,
      title: "William Stax Group",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/williamtaxgroup.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.williamstaxgroup.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Taxation",
    },
    {
      id: 39,
      title: "Grande Cosmetics",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/grande.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://grandecosmetics.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Cosmetics, Skincare",
    },
    {
      id: 40,
      title: "Venus Consulting Group",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/venusconsulting.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.venusconsultinggroup.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Consulting",
    },
    {
      id: 41,
      title: "123presets",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/123preset.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://123presets.store/",
      showGithub: false,
      githubUrl: "",
      category2: "Tech, Presets",
    },
    {
      id: 43,
      title: "Steady Helm Group",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/steadyhelmgroup.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://steadyhelmgroup.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Consulting",
    },
    {
      id: 44,
      title: "Ami Coaches",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/amicoaches.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://amicoaches.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Consulting, Coaching",
    },
    {
      id: 45,
      title: "Big Little Universe",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/blu.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://biglittleuniverse.co/",
      showGithub: false,
      githubUrl: "",
      category2: "",
    },
    {
      id: 46,
      title: "Ambyr Childers",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/ambyr-childers.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://ambyrchilders.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 47,
      title: "Bayou With Love",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/bayou.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://bayouwithlove.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 48,
      title: "Bee Tree Solutions",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/beetree.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.beetreesolutions.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Consulting",
    },
    {
      id: 49,
      title: "Erretihomes",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/erretihomes.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "http://www.erretihomes.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Real Estate, Business",
    },
    {
      id: 50,
      title: "By Bruno",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/bybruno.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "http://bybruno.co/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 51,
      title: "Ragdoll",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/ragdoll.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://ragdoll-la.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel",
    },
    {
      id: 52,
      title: "Eklexic",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/eklexic.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.eklexic.com",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 54,
      title: "General Home Medical Supply",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/gmhs.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://generalhomemedicalsupply.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Medical, Supplies",
    },
    {
      id: 55,
      title: "Maison ELI",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/maisonelii.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://maisoneli.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Apparel, Fashion",
    },
    {
      id: 56,
      title: "Jolivoyageur",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/jv.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://jolivoyageur.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Real Estate",
    },
    {
      id: 57,
      title: "Woolloomooloo shoe",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/wulumulu.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.woolloomoolooshoe.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Shoes",
    },
    {
      id: 58,
      title: "Solid Rock Support",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/solidrock.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.solidrocksupport.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Business, Consulting",
    },
    {
      id: 59,
      title: "NMP Properties",
      category: "wordpress",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/nmp.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "http://nmpproperties.com.au/",
      showGithub: false,
      githubUrl: "",
      category2: "Real Estate, Business",
    },
    {
      id: 60,
      title: "OXA Leather",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/oxa.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://oxaleather.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Fashion",
    },
    {
      id: 61,
      title: "Foxx Life Sciences",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/foxlife.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.foxxlifesciences.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Medical, Life Sciences",
    },
    {
      id: 62,
      title: "Line Sheets",
      category: "shopifyapps",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/linesheets.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.linesheets.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Shopify App",
    },
    {
      id: 63,
      title: "GNRTN Jewelry",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/gnrtn.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://gnrtnjewelry.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Jewelry",
    },
    {
      id: 64,
      title: "Bowwow Labs",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/bowwow.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://www.bowwowlabs.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Animals, Pet, Food, Dog Food, Toys",
    },
    {
      id: 65,
      title: "Liberty In a Can",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/lic.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://libertyinacan.myshopify.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Food",
    },
    {
      id: 66,
      title: "NY Adventure Club",
      category: "mern",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/ny-adv.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://nyadventureclub.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Events, Travel",
    },
    {
      id: 67,
      title: "Shop Pitt Panthers",
      category: "bigcommerce",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/rally-house-3.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://shoppittpanthers.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sports, Apparel",
    },
    {
      id: 68,
      title: "Rally House",
      category: "bigcommerce",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/rally-house-2.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://shopwmubroncos.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sports, Apparel",
    },
    {
      id: 69,
      title: "Rally house | K-state",
      category: "bigcommerce",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/rally-house.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://shop.kstatesports.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sports, Apparel",
    },
    {
      id: 70,
      title: "Shopify to Salesforce OMS Connector",
      category: "shopifyapps",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/omsconnector.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "",
      showGithub: false,
      githubUrl: "",
      category2: "Shopify App",
    },
    {
      id: 71,
      title: "Enkel Studios",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/enkel.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://enkelstudios.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Tech, Accessories",
    },
    {
      id: 72,
      title: "Land mark athletics",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/landmark-athletics.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://landmarkathletics.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Sports, Gym, Fitness",
    },
    {
      id: 73,
      title: "Rev Gum Energy",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/rev-gum-energy.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://chewrevgum.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Food",
    },
    {
      id: 74,
      title: "Shop Quell",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/shopquell.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://shopquell.co/",
      showGithub: false,
      githubUrl: "",
      category2: "Accessories, Apparel",
    },
    {
      id: 75,
      title: "Kreatures of habbit",
      category: "shopify",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/kreatures-of-habbit.webp",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://kreaturesofhabit.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Food",
    },
    {
      id: 76,
      title: "Honeybalm AU",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-au.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.au/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 77,
      title: "Honeybalm US",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-us.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.com/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 78,
      title: "Honeybalm UK",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-uk.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.co.uk/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 79,
      title: "Honeybalm DE",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-de.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.de/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 80,
      title: "Honeybalm SE",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-se.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.se/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 81,
      title: "Honeybalm NO",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-no.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.no/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 82,
      title: "Honeybalm FR",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-fr.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.fr/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 83,
      title: "Honeybalm NL",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-nl.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.nl/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
    {
      id: 84,
      title: "Honeybalm ES",
      category: "shopifyplus",
      description:
        "Custom Shopify theme with advanced product filtering and checkout optimization",
      image: "/images/projects/honeybalm-es.png",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      liveUrl: "https://honeybalm.es/",
      showGithub: false,
      githubUrl: "",
      category2: "Skincare, Cosmetics",
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'shopifyplus', label: 'Shopify Plus' },
    { key: 'shopify', label: 'Shopify' },
    { key: 'shopifyapps', label: 'Shopify Apps' },
    { key: 'bigcommerce', label: 'BigCommerce' },
    { key: 'mern', label: 'MERN Stack' },
    { key: 'nextjs', label: 'Next.js' },
    { key: 'wordpress', label: 'WordPress' }
  ];

  // Get all unique category2 values from projects
  const getAllCategory2Values = () => {
    const allValues = new Set<string>();
    projects.forEach(project => {
      if (project.category2) {
        const values = project.category2.split(',').map(val => val.trim());
        values.forEach(val => allValues.add(val));
      }
    });
    return Array.from(allValues).sort();
  };

  // Get project count for each filter
  const getProjectCount = (filterKey: string) => {
    if (filterKey === 'all') return projects.length;
    return projects.filter(project => project.category === filterKey).length;
  };

  // Filter projects based on both category and category2
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesCategory2 = activeCategory2 === 'all' || 
      (project.category2 && project.category2.includes(activeCategory2));
    return matchesCategory && matchesCategory2;
  });

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of successful projects across different platforms and
            technologies
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category2 Dropdown - Left Side */}
          <div className="w-full md:w-64">
            <Select value={activeCategory2} onValueChange={setActiveCategory2}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {getAllCategory2Values().map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filter Buttons - Right Side */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-primary shadow-glow"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {filter.label} 
                {/* ({getProjectCount(filter.key)}) */}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-large hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={project.liveUrl}>
                    <Button
                      size="sm"
                      className="bg-background text-foreground hover:bg-muted"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Site
                    </Button>
                    </a>
                    {project.showGithub && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-background text-background hover:bg-background hover:text-foreground"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    {/* <Button size="sm" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button> */}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                {/* <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p> */}
                <div className="flex flex-wrap gap-2">
                  {/* {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;