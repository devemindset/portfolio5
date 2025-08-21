"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';

// On déclare l'objet CMS qui sera créé par le script dans l'objet global `window`
declare global {
  interface Window {
    CMS: any;
  }
}

// La configuration est un objet JavaScript simple
const cmsConfig = {
  local_backend: true,
  backend: {
    name: 'test-repo', // Utilise un backend fictif qui sauvegarde dans le navigateur
  },
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Hero Section",
          name: "hero",
          file: "src/content/components/hero.json",
          fields: [
            { label: "Name", name: "name", widget: "string" },
            { label: "Subtitle", name: "subtitle", widget: "string" },
            { label: "Button Text", name: "buttonText", widget: "string" },
            { label: "Background Image", name: "backgroundImage", widget: "image" },
          ],
        },
      ],
    },
  ],
};

const AdminPage = () => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@3.1.10/dist/decap-cms.js';
    script.async = true;

    script.onload = () => {
      if (window.CMS) {
        window.CMS.init({ config: cmsConfig });
      } else {
        console.error('Decap CMS script loaded, but window.CMS is not defined.');
      }
    };

    document.body.appendChild(script);

    // On s'assure de nettoyer le script si le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Content Manager</title>
        {/* CORRECTION 1 : On ajoute le lien vers le CSS du CMS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/decap-cms@3.1.10/dist/decap-cms.css"
        />
      </Head>
      {/* CORRECTION 2 : On fournit le point de montage requis par le CMS */}
      <div id="nc-root"></div>
    </>
  );
};

export default AdminPage;
