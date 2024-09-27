import idolcsLogo from "../../../public/assets/IDOLCS.svg";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-[768px]">
                    <header className="p-3 w-fulll flex flex-col items-center">
                        <img className="h-[2.5em]" src={idolcsLogo} alt="" />
                    </header>
                    <main className="">{children}</main>
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
