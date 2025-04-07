"use client";

import { useState } from "react";
import { useCreateVideo } from "@/hooks/useCreateVideo";
import { CreateVideoInput } from "@/lib/api/videos/types";
import InputEl from "@/components/elements/InputEl";
import ButtonEl from "@/components/elements/ButtonEl";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
const CreateVideosForm = ({ enableHide = false }: { enableHide?: boolean }) => {
  const mutation = useCreateVideo();
  const [form, setForm] = useState<CreateVideoInput>({
    user_id: "",
    description: "",
    video_url: "",
    title: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.user_id || !form.description || !form.video_url || !form.title) {
      setError("Please fill in all fields");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      setSuccess("Video uploaded successfully!");
      setForm({
        user_id: "",
        description: "",
        video_url: "",
        title: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to upload video. Please try again later.");
    }
  };

  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="flex flex-1 items-center justify-center py-5">
        <div className="layout-content-container flex flex-col items-center max-w-[512px] py-5 lg:max-w-[960px] flex-1">
          <div className="flex flex-row items-center justify-between">
            <h3 className="tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">
              Create a Video
            </h3>
            {enableHide && (
              <span
                onClick={() => setIsHidden(!isHidden)}
                className="cursor-pointer"
              >
                {isHidden ? (
                  <ChevronDownIcon className="w-4 h-4" />
                ) : (
                  <ChevronUpIcon className="w-4 h-4" />
                )}
              </span>
            )}
          </div>
          {(!isHidden || !enableHide) && (
            <form
              onSubmit={handleSubmit}
              onFocus={() => [setError(null), setSuccess("")]}
              className="flex max-w-[480px] flex-col items-start gap-4 px-4 py-3"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="user_id" className="text-sm">
                  User ID
                </label>
                <InputEl
                  type="text"
                  name="user_id"
                  value={form.user_id}
                  onChange={handleChange}
                  id="user_id"
                  placeholder="User ID"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <InputEl
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                <InputEl
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  id="description"
                  placeholder="Description"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="video_url" className="text-sm">
                  Video URL
                </label>
                <InputEl
                  type="text"
                  name="video_url"
                  value={form.video_url}
                  onChange={handleChange}
                  id="video_url"
                  placeholder="Video URL"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <ButtonEl type="submit">Upload</ButtonEl>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateVideosForm;
