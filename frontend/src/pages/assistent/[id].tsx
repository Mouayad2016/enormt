import React, { useEffect, useState } from 'react';

import PageMeta from '../../components/meta/PageMeta';
import PageHeader from '../../components/header/PageHeader';
import FooterOne from '../../components/footer/FooterOne';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/layout/Layout';
import db from '../../data/db/assistent.json';
import { useRouter } from 'next/router';
import Frame from '../../components/assistent/chatFrame';
interface Item {
  id: string;
  title: string;
}
const SingleBlog = () => {
  const [item, setItem] = useState<Item | null>(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const selectedItem = db.find((item) => item.id === id);
    setItem(selectedItem ?? null);
  }, [id]);
  let varTitle = '';
  let dec = '';
  let key = '';
  if (item) {
    varTitle = item.title || '';
  }

  return (
    <Layout>
      <PageMeta title={varTitle} description={dec} keywords={key} />
      <Navbar />
      <PageHeader
        title={varTitle}
        desc={`Denna AI-assistent är specialutvecklad för ${varTitle}. Den är designad för att visa hur vår AI-teknik kan skräddarsys för att passa just ert företags unika behov. Detta är bara början potentialen för vad mer som kan åstadkommas är enorm.`}
        key={''}
      />
      <Frame></Frame>
      <FooterOne />
    </Layout>
  );
};

export default SingleBlog;
