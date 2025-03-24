"use client";

import { useState } from "react";
import { useCreateVideo } from "@/hooks/useCreateVideo";
import { CreateVideoInput } from "@/lib/api/videos/types";
import InputEl from "@/components/elements/InputEl";
import ButtonEl from "@/components/elements/ButtonEl";
const CreateVideosForm = () => {
  const mutation = useCreateVideo();
  const [form, setForm] = useState<CreateVideoInput>({
    user_id: "",
    description: "",
    video_url: "",
    title: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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
          <h3 className="text-[#0e141b] tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">
            Create a Video
          </h3>
          <form onSubmit={handleSubmit} onFocus={() => [setError(null), setSuccess('')]} className="flex max-w-[480px] flex-col items-start gap-4 px-4 py-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="user_id" className="text-sm text-[#0e141b]">
                User ID
              </label>
              <InputEl
                type="text"
                name="user_id"
                value={form.user_id}
                onChange={handleChange}
                className=""
                id="user_id"
                placeholder="User ID"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm text-[#0e141b]">
                Description
              </label>
              <InputEl
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className=""
                id="description"
                placeholder="Description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="video_url" className="text-sm text-[#0e141b]">
                Video URL
              </label>
              <InputEl
                type="text"
                name="video_url"
                value={form.video_url}
                onChange={handleChange}
                className=""
                id="video_url"
                placeholder="Video URL"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm text-[#0e141b]">
                Title
              </label>
              <InputEl
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className=""
                id="title"
                placeholder="Title"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <ButtonEl type="submit">Upload</ButtonEl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateVideosForm;
