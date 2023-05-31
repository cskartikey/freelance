export default function Footer(){
    return (
        <footer className="fixed bottom-16 w-full flex justify-start pl-8">
            <div>
                <p className="text-white opacity-[.35] font-Space-Mono">freelance.kodec.tech</p>
            </div>
            <div className="flex space-x-4 border-2 border-solid border-nav-blue opacity-50 ml-36 font-Space-Mono">
                    <div className="bg-scroll-blue text-black opacity-90">
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                    <div>
                        4
                    </div>
            </div>
        </footer>
    )
}