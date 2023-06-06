import { type NextPage } from "next";
import Head from 'next/head';
import Typewriter from "typewriter-effect";


const TeamMember : NextPage = () => {
    return (
        <>
            <Head>
                <title>Team</title>
            </Head>
            <section className="w-screen h-screen">
                <section className="max-w-[610px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center min-h-[200px]">
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Some badass tagline which basically means Meet Our Team (again Typing animation.)')
                        .start();
                    }}
                    options={{
                        wrapperClassName: 'team-typewriter-text-index',
                        cursorClassName: 'team-typewriter-cursor-wrapper Typewriter__cursor',
                    }}
                    />
                </section>
            </section>
        </>
    )
}

export default TeamMember;