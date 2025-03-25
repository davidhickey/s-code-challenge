"use client";
import { useState } from "react";
import { CreateCommentInput } from "@/lib/api/videos/types";
import useCreateComment from "@/hooks/useCreateComment";
import InputEl from "@/components/elements/InputEl";
import ButtonEl from "@/components/elements/ButtonEl";
const CreateCommentForm = ({ video_id }: { video_id: string }) => {
  const mutation = useCreateComment();
  const [form, setForm] = useState<CreateCommentInput>({
    video_id: video_id,
    user_id: "",
    content: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.user_id || !form.content) {
      setError("Please fill in all fields");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      setSuccess("Comment created successfully!");
      setForm({
        video_id: video_id,
        user_id: "",
        content: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to create comment. Please try again later.");
    }
  };


  return (
    <div className="flex flex-col gap-2 py-8">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Add a Comment</h2>
      <form onSubmit={handleSubmit} onFocus={() => [setError(null), setSuccess('')]} className="flex max-w-[480px] flex-col items-start gap-4 px-4 py-3">
      <InputEl
        id="user_id"
        type="text"
        name="user_id"
        placeholder="User ID"
        value={form.user_id}
        onChange={(e) => setForm({ ...form, user_id: e.target.value })}
      />
      <InputEl
        id="content"
        type="text"
        name="content"
        placeholder="Comment"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <ButtonEl type="submit">Create Comment</ButtonEl>
      </form>
    </div>
  );
};

export default CreateCommentForm;