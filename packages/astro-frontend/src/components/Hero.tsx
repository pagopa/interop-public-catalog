import {
  Button,
  HeroBackground,
  HeroBody,
  Hero as HeroDRK,
  HeroTitle,
  Input,
} from "design-react-kit";
import React from "react";

type HeroProps = unknown;

export const Hero: React.FC<HeroProps> = (props) => (
  <HeroDRK overlay="dark">
    <HeroBackground
      alt="imagealt"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
      title="image title"
    />
    <HeroBody>
      <HeroTitle tag="h2">
        Esplora le API della Pubblica Amministrazione
      </HeroTitle>
      <p className="d-none d-lg-block">
        Cerca nel catalogo, accedi ai dati tramite la Piattaforma Digitale
        Nazionale Dati (PDND) e crea servizi innovativi per il tuo ente e per le
        persone.
      </p>
      <Input
        buttonRight={<Button color="secondary">Cerca</Button>}
        hasButtonRight
        id="CatalogSearch"
        // label="Cerca nel catalogo per parola chiave"
        type="text"
        placeholder="Cerca nel catalogo per parola chiave"
      />
    </HeroBody>
  </HeroDRK>
);
