import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const AboutUs = () => {
    return (
        <div>
            <Head>
                <title>About us Page</title>
            </Head>

            <Navbar></Navbar>
            <h1 className="text-center">This is About us page</h1>
        </div>
    );
};

export default AboutUs;