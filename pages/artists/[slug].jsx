import Head from 'next/head';

const Artists = ({artist}) => (
    <>
        <Head>
            <meta content={`List of tracks where artists, albums, titles and lyrics contain '${artist}'`} name="description" />
        </Head>
        <div>
            {artist}
        </div>
    </>
);

export default Artists;

export async function getStaticPaths() {
    /**
     * fallback here says that next js should check getStaticProps if page is not already in cache.
     *      blocking means that nextjs will not return html to the client till the page is generated.
     *      if you have no blocking nextjs will send the empty app shell and after generation it will send
     *      the data to the client and update the page.
     * paths tells nextjs an list of pages it should generate on "next build" command.
     */
    return {
        fallback: 'blocking',
        paths: [
            '/artists/drake',
            '/artists/eminem',
            '/artists/ed-sheeran',
            '/artists/rihanna',
            '/artists/bruno-mars'
        ]
    };
}

export async function getStaticProps({params}) {
    /**
     * Here you tell your page the actual slug. In this simple case revalidate is not needed because
     * there is no data that changes over time.
     */
    return {
        props: {artist: params.slug},
        revalidate: 2
    }
}