interface ArrowsProps {
    onClickPrev: () => void;
    onClickNext: () => void;
}

export const Arrows = ({onClickPrev, onClickNext}: ArrowsProps) => {
    return(
        <div className="absolute bottom-[260px] right-14 z-10 flex items-center gap-1">
            <button onClick={onClickPrev} className="bg-[#eee5] fill-white font-mono w-10 h-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg text-lg transition duration-500 hover:bg-white hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animate-show-content"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></button>

            <button onClick={onClickNext} className="bg-[#eee5] fill-white font-mono w-10 h-10 flex items-center justify-center rounded-tr-lg rounded-br-lg text-lg transition duration-500 hover:bg-white hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animate-show-content"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></button>

        </div>
    );
}