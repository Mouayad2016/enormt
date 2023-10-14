import React from 'react';
import BlogGrid from '../components/blog/BlogGrid';
import PageHeader from '../components/header/PageHeader';
import PageMeta from '../components/meta/PageMeta';
import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';

const Blogs = () => {
  return (
    <Layout>
      <PageMeta title="Nyheter & bloggar" />
      <Navbar  />
      <PageHeader
        title="Nyhetssida"
        desc="Nedan hittar du inlägg om våra nyheter och bloggar"
        // blogtags
      />
      <BlogGrid />
      <FooterOne footerGradient></FooterOne>
     
    </Layout>
  );
};

export default Blogs;