import { type NextPage } from "next";
import Head from 'next/head';
import Typewriter from "typewriter-effect";

const Team : NextPage = () => {
    return (
        <>
            <Head>
                <title>Team</title>
            </Head>
            <section>
                <div>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString('Hi there!')
                          .start();
                      }}
                      options={{
                        wrapperClassName: 'team-typewriter-text-wrapper',
                        cursorClassName: 'team-typewriter-cursor-wrapper Typewriter__cursor',
                      }}
                    />
                </div>
            </section>
        </>
    )
}

export default Team;