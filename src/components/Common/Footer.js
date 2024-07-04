import logo from '../../assets/img/Logo-parinay-setu.png';

const Group = () => {
    return (
        <div className="w-full relative h-[88px] mt-20 text-center text-[24px] text-black font-subheading">
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-khaki-50 h-[88px]" />
            <img className="absolute bottom-[15.8px] left-[10px] w-[61px] h-[57.2px] object-cover" alt="Logo" src={logo} />
            <div className="absolute bottom-[30px] left-[634px] uppercase font-semibold">
                <span>{`PARINAY `}</span>
                <span className="text-red">SETU</span>
            </div>
        </div>);
};

export default Group;
