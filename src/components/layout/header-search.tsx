export const HeaderSearch = () => {
    return (
        <div>
            <input 
                type="search" 
                className="
                    border 
                    border-gray-200 
                    rounded-sm 
                    w-full 
                    pl-12 
                    py-3 
                    bg-no-repeat 
                    outline-0 
                    bg-[url('/assets/ui/search.png')] 
                    bg-[16px_50%] 
                    bg-[size: 24px]
                    text-gray-500
                "
                placeholder="O que você procura?"               
            />
        </div>
    );
}