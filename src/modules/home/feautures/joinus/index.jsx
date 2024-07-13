import React from 'react'
import telegram from "../../assets/telegram.webp"
import discord from "../../assets/discord.webp";
import reddit from "../../assets/reddit.webp";
import twitter from "../../assets/twitter_2.webp";
export default function JoinUs() {
  return (
    <div className="mt-[10%] px-[7%]">
      <h3 className="text-white text-[50px] text-center font-black">
        Follow us
      </h3>
      <div className="flex flex-row  justify-center mt-[4%]">
        <div className="sm:flex-row flex-col  gap-10 items-center">
          <div>
            <img className="w-[150px]" src={telegram} alt="telegram" />
            <h5 className="text-center text-white/60 font-semibold">
              Telegram
            </h5>
          </div>
          <div>
            {" "}
            <img className="w-[150px]" src={discord} alt="telegram" />
            <h5 className="text-center text-white/60 font-semibold">Discord</h5>
          </div>
          <div>
            {" "}
            <img className="w-[150px]" src={reddit} alt="telegram" />
            <h5 className="text-center text-white/60 font-semibold">Reddit</h5>
          </div>
          <div>
            <img className="w-[150px]" src={twitter} alt="telegram" />
            <h5 className="text-center text-white/60 font-semibold">Twitter</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
