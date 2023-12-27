import Image from "next/image";

export default function LeadingImage({ header }) {
    return (
        <div className="relative h-60 w-full overflow-hidden bg-slate-400 lg:h-80">
            <Image
            src={header?.picture?.url}
            //   width={header?.picture?.width}
            //   height={header?.picture?.height}
            fill={true}
            alt="Złom stalowy i metali kolorowych"
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
            />
      </div>
    )

}