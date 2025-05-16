"use client";
import { editInfo } from "@/services/users";
import { useFormState } from "react-dom";
import AvatarForm from "../AvatarForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Filters from "../Filters";
import { allGenres } from "@/public/data";

export default function EditingForm({ lastData }) {
  const [state, formAction] = useFormState<any, FormData>(editInfo, undefined);
  const [avatar, setAvatar] = useState<any>(lastData?.avatar);
  const [tags, setTags] = useState<any>(lastData?.tags);

  const add_tag = (payload) => {
    if (tags === undefined) {
      setTags([payload]);
    } else {
      let newTags = tags.concat(payload);
      setTags(newTags);
    }
  };
  const del_tag = (payload) => {
    if (tags?.length === 1) {
      setTags([]);
    } else {
      let newTags = tags?.filter((el) => {
        return el !== payload;
      });
      setTags(newTags);
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (state) {
      if (state?.status === "success") {
        toast.success("Updated Successfully!");
        router.push(`/users/${state?.data?.user?.username}`);
      } else {
        toast.error(state);
      }
    }
  }, [state]);

  return (
    <section>
      <form
        action={formAction}
        className="flex flex-col items-start gap-2 w-full"
      >
        <div className="flex flex-col items-start w-full gap-2">
          <div className="flex flex-col gap-1">
            <label>avatar</label>
            <AvatarForm state={avatar} setState={setAvatar} />
            <input
              type="hidden"
              hidden
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4 md:flex-col">
            <div className="flex flex-col items-start gap-2 w-1/3 md:w-full">
              <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  autoCapitalize="off"
                  name="username"
                  id="username"
                  placeholder="Username"
                  defaultValue={lastData?.username}
                  className="input w-[150px]"
                />
              </div>
              <div className="flex flex-col gap-1 w-[90%]">
                <label htmlFor="bio">bio</label>
                <textarea
                  className="text-size-6 min-h-[50px] input w-[90%]"
                  name="bio"
                  id="bio"
                  autoCapitalize="off"
                  placeholder="Bio"
                >
                  {lastData?.bio}
                </textarea>
              </div>
              <hr />
              <h2 className="text-size-4">social media username</h2>
              <div className="flex flex-row justify-between items-center w-[90%]">
                <label htmlFor="instagram">instagram</label>
                <input
                  type="text"
                  autoCapitalize="off"
                  name="instagram"
                  id="instagram"
                  placeholder="instagram username"
                  defaultValue={lastData?.socials?.instagram}
                  className="input w-[150px]"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-[90%]">
                <label htmlFor="discord">discord</label>
                <input
                  type="text"
                  name="discord"
                  id="discord"
                  autoCapitalize="off"
                  placeholder="discord username"
                  defaultValue={lastData?.socials?.discord}
                  className="input w-[150px]"
                />
              </div>
              <div className="flex flex-row justify-between items-center w-[90%]">
                <label htmlFor="steam">steam</label>
                <input
                  type="text"
                  name="steam"
                  id="steam"
                  autoCapitalize="off"
                  placeholder="steam username"
                  defaultValue={lastData?.socials?.steam}
                  className="input w-[150px]"
                />
              </div>
            </div>
            <div className="w-2/3 md:w-full flex flex-col gap-2">
              <h3 className="text-size-4 capitalize">choose 3 tags you like</h3>
              <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-2 sm:gap-x-2">
                {allGenres.map((el) => {
                  return (
                    <Filters
                      data={tags}
                      name={el}
                      add={add_tag}
                      del={del_tag}
                      state={true}
                      dispatch={""}
                      key={el}
                    />
                  );
                })}
                <input
                  type="hidden"
                  hidden
                  name="tags"
                  value={tags.join(",")}
                  onChange={(e) => setTags(e.target.value.split(","))}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="btn-accent capitalize">submit</button>
      </form>
    </section>
  );
}
