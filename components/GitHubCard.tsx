"use client";
import { FunctionComponent, HTMLAttributes, use } from "react";
import { User } from "@/app";

interface GitHubCardProps extends HTMLAttributes<HTMLDivElement> {
  username: string,
  animate? : boolean
}

// Funnction to fetch data
async function getData(user: string): Promise<User> {
  let res = await fetch(`https://api.github.com/users/${user}`, {});

  res = await res.json();
  const userJson = res as unknown as User;
  return userJson;
}

const GitHubCard: FunctionComponent<GitHubCardProps> = ({
  animate,
  username,
  className,
}) => {
  const user = use(getData(username));
  const anime = animate ? " transition duration-500  hover:translate-y-[-5px] hover:scale-110 hover:delay-100" : ""
  return (
    <>
      <div className={className}>
      
        <div className={"relative inline-block  rounded-md bg-[#222833] px-14 py-6 pt-2 text-center font-mono  shadow-xl shadow-[#2b2a2b] " + anime}>
          <div className="absolute left-0 right-0 top-0 m-0 h-28 w-full rounded-t-md bg-[#F54768] "></div>
          <div className="">
            <a
              href={"https://github.com/" + user.login}
              target="_blank"
              rel="noopener"
            >
              <img
                id="github-logo"
                className="absolute right-3 top-3 w-5"
                src="https://i.ibb.co/frv5pB3/github-logo.png"
                alt="github-logo"
              />
            </a>
            <div className="">
              <div className="relative mx-auto my-3 mb-7 h-40  w-40">
                <img
                  className="rounded-[50%] bg-slate-800 p-2"
                  src={"https://avatars.githubusercontent.com/" + user.login}
                />
              </div>
              <h1>
                <a
                  className="font-mono text-2xl font-semibold"
                  href={user.html_url}
                  target="_blank"
                  rel="noopener"
                >
                  {user.name}
                </a>
              </h1>
              <div className="mb-5 font-mono text-base font-light text-gray-400">
                <a href={user.html_url} target="_blank" rel="noopener">
                  {user.login}
                </a>
              </div>
              <p className="w-60 font-mono text-base">{user.bio ?? ""}</p>
              <div className="mt-8">
                <div className="flex justify-around space-x-2 rounded-md border-t-4 border-t-[#F54768]  bg-[#1D2025] p-2 shadow-md shadow-slate-800">
                  <div className="box-wrapper">
                    <div className="mb-1 font-semibold text-slate-100 ">
                      {user.followers}
                    </div>
                    <div className="text-xs text-slate-400">Followers</div>
                  </div>
                  <div className="box-wrapper">
                    <div className="mb-1 font-semibold text-slate-100 ">
                      {user.following}
                    </div>
                    <div className="text-xs text-slate-400">Following</div>
                  </div>
                  <div className="box-wrapper">
                    <div className="mb-1 font-semibold text-slate-100 ">
                      {user.public_repos}
                    </div>
                    <div className="text-xs text-slate-400">Repositories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GitHubCard;
