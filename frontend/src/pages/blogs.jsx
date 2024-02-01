import React from 'react';
import BlogGrid from '../components/blog/BlogGrid';
import PageHeader from '../components/header/PageHeader';
import PageMeta from '../components/meta/PageMeta';
import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import ChatBubbleComponent from '../components/assistent/ChatBubbleComponenet';

const Blogs = () => {
  return (
    <>
      {' '}
      {/* <div className="App">
        <ChatBubbleComponent />
      </div>{' '} */}
      <Layout>
        <PageMeta
          title="Senaste nyheter och bloggar från Enormt | IT-tips och insikter"
          description="Utforska våra senaste nyheter och blogginlägg. Få insikter och tips från våra experter. Håll dig uppdaterad med Enormt."
          keywords="Nyheter, bloggar, IT-tips, insikter, Enormt"
        />
        <Navbar />
        <BlogGrid />
        <FooterOne footerGradient></FooterOne>
      </Layout>
    </>
  );
};

export default Blogs;
