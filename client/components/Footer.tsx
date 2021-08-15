import * as React from 'react';
import type {GetStaticProps} from 'next';
export async function getServerSideProps() {
 return {
     props:"welcome there"
 }
}


const Footer: React.FC = () => {
    return ( 
        <React.Fragment>
            welcome to the footer
        </React.Fragment>
     );
}
 
export default Footer;