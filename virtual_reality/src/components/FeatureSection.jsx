import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                Feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:6xl mt-10 lg:mt-20 tracking-wide">Easily build <span className="bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text">your code</span> </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            <div className="w-full sm:1/2  lg:1/3">
                <div className="flex">
                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FeatureSection