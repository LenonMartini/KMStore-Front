import { Banner } from "@/types/banner";
import Link from "next/link";
import Image from "next/image";
import { link } from "fs";
type Props = {
    list: Banner[];
}
export const Banners = ({ list }: Props) => {
    console.log(list);
    return (
        <div>
            <div className="relative aspect-[3/1]">
                {list.map((banner, index) => (
                    <Link
                        key={index}
                        href={banner.link}
                        className="trasition-all absolute inset-0"
                    >
                        <Image                            
                            src={banner.img} 
                            alt="" 
                            width={1200} 
                            height={400} 
                            className="w-full rounded-sm"
                        />
                    </Link>
                ))}
            </div>
            <div className="">
                   ... 
            </div>
        </div>
    );
}