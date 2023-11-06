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
      <PageMeta
        title="Senaste nyheterna och blogginläggen från Enormt | IT-tips och insikter"
        description="Utforska våra senaste nyheter och blogginlägg om IT-lösningar. Få insikter och tips från våra experter. Håll dig uppdaterad med Enormt."
        keywords="Nyheter, bloggar, IT-tips, insikter, Enormt"
      />
      <Navbar />
      <BlogGrid />
      <FooterOne footerGradient></FooterOne>
    </Layout>
  );
};

export default Blogs;
