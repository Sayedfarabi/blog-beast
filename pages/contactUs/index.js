import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";


const ContactUs = () => {
    return (
        <div>
            <Head>
                <title>Contact us Page</title>
            </Head>
            <div>
                <Navbar></Navbar>
            </div>
            <h1 className="text-center">This is Contact us page</h1>
        </div>
    );
};

export default ContactUs;