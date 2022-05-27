/*
  This is a template for the head of the page.
  This will include the page title, description, and the favicon.
*/
import Head from 'next/head';

interface Props{
  title: string;
  content?: string;
}

export const PageHead = ({title, content}: Props) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  );
}

export default PageHead;