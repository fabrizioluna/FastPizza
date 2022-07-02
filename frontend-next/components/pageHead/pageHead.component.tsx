import Head from "next/head";

export const PageHead = ({ titlePage }: { titlePage: string }) => {
  return (
    <Head>
      <title>{titlePage}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};
