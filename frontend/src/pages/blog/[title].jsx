import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../../components/blog/BlogDetails';
import PageMeta from '../../components/meta/PageMeta';
import NewsLetter from '../../components/blog/NewsLetter';
import PageHeader from '../../components/header/PageHeader';
import FooterOne from '../../components/footer/FooterOne';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/layout/Layout';
import db from '../../data/db/blogsData';
import { useRouter } from 'next/router';

const SingleBlog = () => {
  const [item, setitem] = useState({});
  const router = useRouter();
  const { title } = router.query;
  useEffect(() => {
    const selectedItem = db.find((item) => item.title === title);
    setitem(selectedItem);
  }, [title]);
  let varTitle = '';
  let dec = '';
  let key = '';
  // console.log(item.page.desc)
  if (item) {
    varTitle = item.page?.title || '';
    dec = item.page?.desc || '';
    key = item.page?.keywords || '';
  }

  return (
    <Layout>
      <PageMeta title={varTitle} description={dec} keywords={key} />

      <Navbar />
      <PageHeader title={title} />
      <BlogDetails item />
      <FooterOne />
    </Layout>
  );
};

export default SingleBlog;
