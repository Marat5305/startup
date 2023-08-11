import React from 'react';
import Head from 'next/head';
import Layout from './components/layout';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
    const elem = (
        <Layout>
            <Head>
                <title>First page</title>
            </Head>
            <section>
            <h1>Ассаламу алейкум ва рахматуллахи ва баракатух!</h1>
            <Image 
                src="/images/krol.gif" 
                width={500}
                height={500}
                alt="Sosi hui"/>
            <p>Создал проект nest-next и попробовал создать компонент</p>
            </section>
        </Layout>

        
    )
    return elem;
};

export default Home;