import Link from "next/link";
import Icon from "../layout/Icon";
import Genre from "../Genre";
import Avatar from "../layout/Avatar";

async function UserInfo({ user, check }) {
  let socials = user?.data?.socials;
  return (
    <div className="w-full flex flex-col items-start border-b border-lightdark gap-4">
      <div className="w-full flex flex-row items-center gap-8">
        <div className="w-[75px] h-[75px] bg-dark rounded-full">
          <Avatar avatar={user?.data?.avatar} className="w-[75px]" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-size-4">{user?.data?.username}</h3>
          <div className="flex flex-row items-center gap-8">
            {user?.data?.tags &&
              user?.data?.tags?.map((el) => {
                return <Genre key={el} title={el} />;
              })}
          </div>
        </div>
      </div>
      <div className="w-full h-fit p-1 rounded-sm bg-light dark:bg-middark drop-shadow-sm">
        <pre>
          <p className="text-size-6">{user?.data?.bio}</p>
        </pre>
      </div>
      <div className="w-[60%] md:w-full flex flex-row justify-between items-center">
        {socials && (
          <>
            {socials.instagram && (
              <Popop i={`instagram`} title={socials.instagram} />
            )}
            {socials.discord && <Popop i={`discord`} title={socials.discord} />}
            {socials.steam && <Popop i={`steam`} title={socials.steam} />}
          </>
        )}
      </div>
      {check && (
        <Link
          className="btn-accent-outline absolute top-[120px] end-[160px] md:top-[125px] md:end-[20px]"
          href={`/users/${user?.data?.username}/update`}
        >
          <p className="md:hidden">edit</p>
          <Icon className="hidden md:flex" i={`edit`} />
        </Link>
      )}
    </div>
  );
}

const Popop = ({ i, title, classs = "" }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Icon i={i} className={" text-accent  " + classs} />
      <p className="text-size-5">{title}</p>
    </div>
  );
};

export default UserInfo;
