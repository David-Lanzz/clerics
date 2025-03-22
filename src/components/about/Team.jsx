import React from 'react'

const Team = () => {

    const team = [
        {
            image: ``,
            name: `Bruce Wayne`,
            position: `Position`
        },
        {
            image: ``,
            name: `Bruce Wayne`,
            position: `Position`
        },
        {
            image: ``,
            name: `Bruce Wayne`,
            position: `Position`
        },
        {
            image: ``,
            name: `Bruce Wayne`,
            position: `Position`
        }
    ]
    return (
        <div className='w-full flex justify-center px-4 md:px-[4rem]'>
            <div className="w-full max-w-[90rem] flex flex-col gap-[3rem] items-center">
                <span className="flex items-center gap-4">
                    <span className="bg-primary/50 rounded-full p-1 md:p-2"></span>
                    <h3 className="text-2xl md:text-5xl tracking-[1rem] font-semibold">OUR TEAM</h3>
                    <span className="bg-primary/50 rounded-full p-1 md:p-2"></span>
                </span>
                <span className="w-full flex gap-8 items-center justify-center flex-wrap">
                    {team.map((personnel, index) => (
                        <div
                            key={index}
                            className="w-[20rem] md:max-w-[30%] flex-grow flex flex-col gap-4 bg-tertiary p-4 md:p-6 md:px-8 shadow-lg"
                        >
                            <span className="bg-gray-200 h-[15rem] w-full overflow-hidden">
                                <img src="" alt="" className="w-full h-full object-cover" />
                            </span>
                            <span className="flex flex-col gap-2">
                                <h5 className="text-xl font-semibold">{personnel.name}</h5>
                                <p>{personnel.position}</p>
                            </span>
                        </div>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default Team