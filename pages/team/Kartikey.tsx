import { type NextPage } from "next";
import Head from 'next/head';
import Image from "next/image";
import Typewriter from "typewriter-effect";
import dummyAvatar from '../../assets/png/avatar.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";

const TeamMember : NextPage = () => {
    return (
        <>
            <Head>
                <title>Team</title>
            </Head>
            <section className="w-screen">
                <div className="flex gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col gap-16 max-w-[400px]">
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
                        <p className="text-white text-base font-Poppins">
                            I am Kartikey S. Chauhan. I have experience working as a fullstack developer and have had the opportunity to work with a variety of technologies. I've worked on Android projects and have also worked with Python. Some of my strengths include working with React JS, NodeJS, Tailwind CSS, and MongoDB. 
                        </p>
                    </div>
                    <div className="flex flex-col max-w-[400px] w-full items-center gap-2">
                        <Image src={dummyAvatar} alt={'people'} className="w-full h-auto max-w-[250px] rounded-md pointer-events-none" />
                        <h3 className="text-white opacity-[0.5] text-2xl font-Space-Grotesk font-bold">President</h3>
                    </div>
                </div>
            </section>
            <div className="absolute flex flex-col gap-4 left-[5%] bottom-[22vh]">
                <FontAwesomeIcon icon={faInstagram} className="text-[#A0D8B3] text-3xl opacity-[0.5] cursor-pointer" />
                <FontAwesomeIcon icon={faGithub} className="text-[#A0D8B3] text-3xl opacity-[0.5] cursor-pointer" />
                <FontAwesomeIcon icon={faEnvelopesBulk} className="text-[#A0D8B3] text-3xl opacity-[0.5] cursor-pointer" />
            </div>
        </>
    )
}

export default TeamMember;