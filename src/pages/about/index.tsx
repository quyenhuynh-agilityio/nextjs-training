import React from 'react';
import { GetStaticProps } from 'next';
import { Client } from '../../../prismic-configuration';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Featured from '../../components/Featured';

const About = ({ doc, prismicHomeData }) => {
  if (doc && prismicHomeData) {
    const { data } = doc || {};

    const { body, body1, black_logo, logo } = prismicHomeData.data || {};
    const {
      about_our_company,
      about_our_company_description,
      about_our_company_image,
    } = data || {};

    const { url, alt } = about_our_company_image || {};
    console.log('doc', doc);
    return (
      <div className="container">
        <Header prismicData={body1} logo={black_logo} />
        <div className="w-1147 mx-auto pb-100">
          <h2 className="font-raleWay text-5xl py-60">
            {RichText.asText(about_our_company)}
          </h2>
          <div className="grid grid-cols-2">
            <div className="">
              <Image src={url} alt={alt} width={561} height={388} />
            </div>
            <div className="pl-10">
              {RichText.asText(about_our_company_description)}
            </div>
          </div>
        </div>
        <div className="flex flex-row text-center justify-center bg-gray-110 py-100">
          {body &&
            body[0] &&
            body[0].items.map((item, index) => {
              const { featured_icon, featured_name, featured_info } =
                item || {};
              const { url, alt } = featured_icon || {};
              return (
                <Featured
                  src={url}
                  alt={alt}
                  description={featured_info}
                  title={featured_name}
                  key={`${index}-${featured_name}`}
                />
              );
            })}
        </div>
        <Footer prismicData={body1} logo={logo} />
      </div>
    );
  }
};

export const getStaticProps: GetStaticProps = async ({
  preview = null,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc =
    (await client.getSingle('about_us_page', ref ? { ref } : null)) || {};
  const prismicHomeData =
    (await client.getSingle('homepage', ref ? { ref } : null)) || {};
  return {
    props: {
      doc,
      prismicHomeData,
      preview,
    },
  };
};

export default About;
