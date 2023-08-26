const otherRoutes = [
    'Maternity',
    'New Born Baby',
    'Birthday',
    'Business',
];

const Wedding = () => {
  return (
    <div
        className="
            flex
            flex-col
            gap-2
        "
    >
        <h1
            className="
                font-serif
                font-medium
                text-4xl
                text-primary-1
                mb-8
                text-center
            "
        >
            Wedding Photography
        </h1>
        <div
            className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-1
            "
        >
            {otherRoutes.map((route) => (
                <div
                    key={route}
                    className="
                        text-center
                        text-white
                        text-lg
                        p-3
                        bg-primary-1
                    "
                >
                    {route}
                </div>
            ))}
        </div>
        <div
            className="
                aspect-video
                bg-[url('/wedding-background.webp')]
                h-[424px]
                bg-cover
                bg-center
                bg-no-repeat
                flex
                justify-center
            "
        >
            <div
                className="
                    mt-16
                    w-9/12
                    flex
                    items-center
                    py-2
                    pl-16
                    pr-2
                    rounded-full
                    bg-white
                    text-xl
                    h-16
                "
            >
                <input
                    type="text" 
                    placeholder="Location"
                    className="flex-1 outline-none"
                />
                <input
                    type="text" 
                    placeholder="18th Aprill 2022 - 22nd April 2022"
                    className="flex-1 outline-none"
                />
                <button
                    className="
                        px-7
                        py-3
                        rounded-full
                        text-white
                        bg-primary-1
                    "
                >
                    Search
                </button>
            </div>
        </div>
        <div
            className="
                flex
                flex-col
                py-16
            "
        >
            <h1
                className="
                    text-4xl
                    text-primary-1
                    font-bold
                    mb-12
                    px-9
                "
            >
                Exclusive Deals
            </h1>
            <div
                className="
                    grid
                    grid-cols-3
                    gap-4
                    px-9
                "
            >
                <div
                    className="
                        bg-[url('/wedding-1.jpeg')]
                        w-full
                        h-72
                        bg-cover
                        flex
                        justify-center
                        items-center
                        rounded-2xl
                    "
                >
                    <div
                        className="text-white text-2xl"
                    >
                        10% DISCOUNT
                    </div>
                </div>
                <div
                    className="
                        bg-[url('/wedding-2.jpeg')]
                        w-full
                        h-72
                        bg-cover
                        flex
                        justify-center
                        items-center
                        rounded-2xl
                    "
                >
                    <div
                        className="text-white text-2xl"
                    >
                        MEMBERSHIP PLANS
                    </div>
                </div>
                <div
                    className="
                        bg-[url('/wedding-3.jpg')]
                        w-full
                        h-72
                        bg-cover
                        flex
                        justify-center
                        items-center
                        rounded-2xl
                    "
                >
                    <div
                        className="text-white text-2xl"
                    >
                        LIFETIME <br />
                        ACCESSIBILITY
                    </div>
                </div>
            </div>
            <h1
                className="
                    text-4xl
                    text-primary-1
                    font-bold
                    mt-12
                    px-9
                    text-center
                "
            >
                Join Us and become ultimate lifetime member of Boopho Pro*
            </h1>
        </div>
    </div>
  )
}

export default Wedding