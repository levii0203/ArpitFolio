import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const Webthree = ()=>{
    return (
        <div className=" flex flex-row lg:px-48 h-full lg:py-0 w-full md:px-28 md:space-x-5 bg-black lg:space-x-10">
           <Card className="pt-4 lg:h-76">
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                    <p className="text-xl uppercase font-bold text-white">Solidity</p>
                    <div className="py-4">
                        <div className="w-full rounded-full h-2 bg-white">
                            <div className="w-fit h-full  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                                  <p className="text-transparent">ssss sssssssssssssssssss</p>           
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible bg-gray-600">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-lg"
                        src="https://www.logo.wine/a/logo/Solidity/Solidity-Logo.wine.svg"
                        width={270}
                    />
                </CardBody>
            </Card>
            <Card className="py-4 lg:h-76">
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                    <p className="text-xl uppercase font-bold text-white">Etherum</p>
                    <div className="py-4">
                        <div className="w-full rounded-full h-2 bg-gray-600">
                            <div className="w-fit h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                                  <p className="text-transparent"> sssssssssssssssssss</p>           
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible bg-gray-600">
                    <Image
                        alt="Card background"
                        className="object-cover  rounded-xl"
                        src="https://ethereum.org/_ipx/w_750,q_75/%2F_next%2Fstatic%2Fmedia%2Fimpact_transparent.7420c423.png?q=75&url=%2F_next%2Fstatic%2Fmedia%2Fimpact_transparent.7420c423.png"
                        width={270}
                    
                
                    />
                </CardBody>
            </Card>
            <Card className="py-4 lg:h-76">
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                    <p className="text-xl uppercase font-bold text-white">Metamask</p>
                    <div className="py-4">
                        <div className="w-full rounded-full h-2 bg-white">
                            <div className="w-fit h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                                  <p className="text-transparent"> sssssssssss</p>           
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-visible items-center  bg-gray-600">
                    <Image
                        alt="Card background"
                        className="object-cover  rounded-xl"
                        src="https://images.ctfassets.net/9sy2a0egs6zh/78HoDbPwuWz8M6er6joJdE/c440f3e5d7262a424f13da69a46e958a/wallet-illo.svg"
                        width={270}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
export default Webthree;