export default function Footer() {
    return (
        <footer className="transparent py-4 mt-8 font-rubik">
            <div className="flex flex-col md:flex-row items-start bg-[#BFDBFF] md:items-start justify-between gap-8 md:gap-0 mb-4 mx-10 md:mx-[130px] py-10 px-10 md:px-[130px]">
                <div>
                    <h3 className="font-rubik font-bold text-[16px]">Social</h3>
                    <ul className="flex flex-col items-start gap-2 mt-2 text-black font-rubik text-[14px]">
                        <li className="flex items-center justify-between gap-2"><img src="/logos/facebook 1.svg" alt="" className="w-[16px] h-[16px]" /> <p>Facebook</p></li>
                        <li className="flex items-center justify-between gap-2"><img src="/logos/linkedin 1.svg" alt="" className="w-[16px] h-[16px]" /> <p>Linkedin</p></li>
                        <li className="flex items-center justify-between gap-2"><img src="/logos/Group 20.svg" alt="" className="w-[16px] h-[16px]" /> <p>Google +</p></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-rubik font-bold text-[16px]">Explore</h3>
                    <ul className="flex flex-col items-start gap-2 mt-2 text-black font-rubik text-[14px]">
                        <li className="flex items-center justify-between gap-2"> <p>Services</p></li>
                        <li className="flex items-center justify-between gap-2"> <p>Team</p></li>
                        <li className="flex items-center justify-between gap-2"><p>Client</p></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-rubik font-bold text-[16px]">Contact</h3>
                    <ul className="flex flex-col items-start gap-2 mt-2 text-black font-rubik text-[14px]">
                        <li className="flex items-center justify-between gap-2"> <p>Lorem Ipsum dummy address</p></li>
                        <li className="flex items-center justify-between gap-2"> <p>used for display</p></li>
                        <li className="flex items-center justify-between gap-2"><p>1234567890</p></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-rubik font-bold text-[16px]">Email</h3>
                    <ul className="flex flex-col items-start gap-2 mt-2 text-black font-rubik text-[14px]">
                        <li className="flex items-center justify-between gap-2"> <p>mendlesoncommunication@email.com</p></li>
                    </ul>
                </div>
            </div>
            <p className="text-black text-center">© Copyright 2018 Mendleson Communication Pty Ltd </p>
        </footer>
    );
}