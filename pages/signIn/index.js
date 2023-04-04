import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const SignIn = () => {
    return (
        <div>
            <Head>
                <title>SignIn Page</title>
            </Head>
            <div>
                <Navbar></Navbar>
            </div>
            <h1 className="text-center">This is Log in page</h1>
        </div>
    );
};

export default SignIn;