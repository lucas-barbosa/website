import Head from 'next/head';
import React from 'react';


export default function Welcome (props:{name:string})  {
    return ( 
        <React.Fragment>
        <Head>
            <title>{props.name}</title>
        </Head>
        <div className="welcome">
            welcome there in welcome page
        </div>
        </React.Fragment>
     );
}

export async function getServerSideProps() {
    return {
        props:{name:"welcome there"} 
}}

export async function getStaticPaths() {
    return "welcome"
}