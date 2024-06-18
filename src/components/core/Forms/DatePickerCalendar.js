import PropTypes from "prop-types";



const DatePickerCalendar = ({ className = "" }) => {
    return (
        <div className={`w-[290px] relative h-[348px] max-w-full max-h-full overflow-auto text-center text-sm text-grey-grey-800 font-overline ${className}`}>
            <div className="absolute top-[calc(50%_-_174px)] left-[calc(50%_-_145px)] shadow-[0px_8px_16px_rgba(0,_0,_0,_0.15)] rounded-lg box-border w-[290px] h-[348px] overflow-hidden border-[1px] border-solid border-line-enable">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black-white-white" />
                    <div className="absolute h-[11.75%] w-[96.55%] top-[14.12%] right-[1.72%] bottom-[74.13%] left-[1.72%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-background-enable" />
                        <div className="absolute h-[52.57%] w-[8.21%] top-[25.03%] left-[88.57%] leading-[150%] inline-block">S</div>
                        <div className="absolute h-[52.57%] w-[8.57%] top-[25.03%] left-[74.29%] leading-[150%] inline-block">F</div>
                        <div className="absolute h-[52.57%] w-[8.57%] top-[25.03%] left-[60%] leading-[150%] inline-block">T</div>
                        <div className="absolute h-[52.57%] w-[8.57%] top-[25.03%] left-[45.71%] leading-[150%] inline-block">W</div>
                        <div className="absolute h-[52.57%] w-[8.57%] top-[25.03%] left-[31.43%] leading-[150%] inline-block">T</div>
                        <div className="absolute h-[52.57%] w-[8.57%] top-[25.03%] left-[17.14%] leading-[150%] inline-block">M</div>
                        <div className="absolute h-[52.57%] w-[8.57%] top-[25.03%] left-[2.86%] leading-[150%] inline-block">S</div>
                    </div>
                    <div className="absolute w-[calc(100%_-_27px)] top-[14px] right-[13px] left-[14px] flex flex-row items-center justify-between text-text-medium font-small-size-body-regular">
                        <img className="w-[21px] relative h-[21px] overflow-hidden shrink-0" alt="" src="ic_chevron_left_48px.svg" />
                        <div className="w-[135px] relative h-6">
                            <div className="absolute top-[calc(50%_-_11px)] left-[0px] leading-[150%] font-medium whitespace-pre-wrap inline-block w-[135px]">September  2019</div>
                        </div>
                        <img className="w-[21px] relative h-[21px] overflow-hidden shrink-0" alt="" src="ic_chevron_right_48px.svg" />
                    </div>
                </div>
                <div className="absolute h-[calc(100%_-_100px)] w-[calc(100%_-_10px)] top-[92px] right-[5px] bottom-[8px] left-[5px] text-text-medium font-small-size-body-regular">
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[240px] bottom-[200px] left-[0px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">24</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[240px] bottom-[160px] left-[0px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">3</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[240px] bottom-[120px] left-[0px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">10</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[240px] bottom-[80px] left-[0px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">17</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[240px] bottom-[40px] left-[0px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">24</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[240px] bottom-[0px] left-[0px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">31</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[200px] bottom-[200px] left-[40px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">25</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[200px] bottom-[160px] left-[40px] rounded-lg overflow-hidden text-blue-blue-500">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">4</div>
                        <div className="absolute top-[calc(50%_+_9px)] left-[calc(50%_-_2px)] rounded-3xs bg-blue-blue-500 w-1 h-1" />
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[200px] bottom-[120px] left-[40px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">11</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[200px] bottom-[80px] left-[40px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">18</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[200px] bottom-[40px] left-[40px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">25</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[200px] bottom-[0px] left-[40px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">1</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[160px] bottom-[200px] left-[80px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">26</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[160px] bottom-[160px] left-[80px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">5</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[160px] bottom-[120px] left-[80px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">12</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[160px] bottom-[80px] left-[80px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">19</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[160px] bottom-[40px] left-[80px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">26</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[160px] bottom-[0px] left-[80px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">2</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[120px] bottom-[200px] left-[120px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">27</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[120px] bottom-[160px] left-[120px] rounded-lg bg-primary-enable overflow-hidden text-black-white-white">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">6</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[120px] bottom-[120px] left-[120px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">13</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[120px] bottom-[80px] left-[120px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">20</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[120px] bottom-[40px] left-[120px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">27</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[120px] bottom-[0px] left-[120px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">3</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[80px] bottom-[200px] left-[160px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">28</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[80px] bottom-[160px] left-[160px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">7</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[80px] bottom-[120px] left-[160px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">14</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[80px] bottom-[80px] left-[160px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">21</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[80px] bottom-[40px] left-[160px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">28</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[80px] bottom-[0px] left-[160px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">4</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[40px] bottom-[200px] left-[200px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">1</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[40px] bottom-[160px] left-[200px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">8</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[40px] bottom-[120px] left-[200px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">15</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[40px] bottom-[80px] left-[200px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">22</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[40px] bottom-[40px] left-[200px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">29</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[40px] bottom-[0px] left-[200px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">5</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[0px] right-[0px] bottom-[200px] left-[240px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">2</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[40px] right-[0px] bottom-[160px] left-[240px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">9</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[80px] right-[0px] bottom-[120px] left-[240px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">16</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[120px] right-[0px] bottom-[80px] left-[240px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">23</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[160px] right-[0px] bottom-[40px] left-[240px] rounded-lg overflow-hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">30</div>
                    </div>
                    <div className="absolute h-[calc(100%_-_200px)] w-[calc(100%_-_240px)] top-[200px] right-[0px] bottom-[0px] left-[240px] rounded-lg overflow-hidden text-text-light">
                        <div className="absolute w-3/5 top-[27.5%] left-[20%] leading-[150%] inline-block">6</div>
                    </div>
                </div>
            </div>
        </div>);
};

DatePickerCalendar.propTypes = {
    className: PropTypes.string
};

export default DatePickerCalendar;
