import logo from '../../assets/img/Logo-parinay-setu.png';

const Group = () => {
    return (
        <div className='flex flex-col justify-center items-center py-2 bg-khaki-50 w-full'>
            <div className="flex justify-center items-center gap-4">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                <div className="flex flex-col justify-center items-center font-niconne">
                    <p className="text-gray-800 text-5xl sm:text-13xl m-0">Parinay</p>
                    <p className="self-end text-5xl sm:text-13xl text-red m-0 mt-[-5px] mr-[-20px]">Setu</p>
                </div>
            </div>
        </div>);
};

export default Group;
