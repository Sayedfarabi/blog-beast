import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";


const SignUp = () => {
    return (
        <div>
            <Head>
                <title>SignUp Page</title>
            </Head>
            <div>
                <Navbar></Navbar>
            </div>
            <h1 className="text-center">This is Sign up page</h1>
        </div>
    );
};

export default SignUp;