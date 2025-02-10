"use client"
import React from 'react';
import ColorTransitionButton from './ColorTransitionButton';
import ScalableSquare from './ScalableSquare';
import BounceButton from './BounceButton';
import FadeOnHover from './FadeOnHover';
import FadeInComponent from './FadeInComponent';
import Gallery from './Gallery';

const Home = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">
        Boletín Tailwind II: Animaciones y Transiciones
      </h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">Ejercicio 1: Botón con Transiciones de Color</h2>
        <ColorTransitionButton />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ejercicio 2: Cuadrado Escalable</h2>
        <ScalableSquare />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ejercicio 3: Efecto de Rebote en un Botón</h2>
        <BounceButton />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ejercicio 4: Desvanecimiento Suave</h2>
        <FadeOnHover />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ejercicio 5: Animación Personalizada (Fade In)</h2>
        <FadeInComponent />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Desafío Final: Galería Interactiva</h2>
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
