import { Icon } from '@iconify/react';
import React from 'react'
import profilePicturePlaceholder from '../assets/pfp-placeholder.jpg';
import { socials } from '../data/social';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={profilePicturePlaceholder}
        alt="Profile Picture"
        className="rounded-full w-48 h-48"
      />

      <h1 className="text-3xl font-bold mt-4">Breno Carvalho da Silva</h1>
      <h2 className="text-xl font-medium mt-2">Software Engineer</h2>

      <div className="flex flex-row mt-4 gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={social.icon} className="text-3xl hover:text-green-400" />
          </a>
        ))}
      </div>

      <section className="flex flex-col text-sm mt-4 text-center gap-3 px-32">
        <p>Olá, meu nome é Breno, entrego soluções de software para empresas há mais de 3 anos. Sou apaixonado em resolver problemas em forma de código, entregando sempre o melhor resultado para o cliente.</p>
        <p>Iniciei meus estudos ainda criança aos 10 anos de idade, brincando com VBS, HTML e CSS. Desde então entrei em fóruns, grupos e desenvolvi meus conhecimentos em diversas linguagens de programação. Em 2019 inciei uma gradução em Ciência da Computação e dei fundamentos aos meus conehcimentos. Atualmente trabalho como desenvolvedor front-end e trabalhando na stack de Angular. Além de que não só conheço como também já trabalhei com React e toda sua stack (e principais tecnologias).</p>
        <p>Entre as soluções que já entreguei envolvem automação, telas pixel-perfect ao Figma e que resolviam com qualidade e eram exatamente o que meus clientes pediram.</p>
        <p>Sempre aberto a novas tecnologias e adepto a novas experiências.</p>
      </section>
    </div>
  )
}

export default AboutMe