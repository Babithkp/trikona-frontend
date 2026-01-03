"use client";
import LeftVector from "@/assets/LeftVector";
import RightVector from "@/assets/RightVector";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import slugify from "slugify";
import FroalaClient from "@/components/FroalaClient";
import { toast } from "react-toastify";
import axios from "axios";

interface Blog {
  id: string;
  title: string;
  description: string;
  readMin: number;
  content: string;
  imageUrl: string;
}
export default function Dashboard() {
  const [blogTitle, setBlogTitle] = useState("Untiltled Blog");
  const [blogReadMin, setBlogReadMin] = useState("0");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImageFile, setBlogImageFile] = useState<null | File | string>(
    null,
  );
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const handleImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file !== null) {
      setBlogImageFile(file);
    }
  };

  const handleImageUpload = async () => {
    if (!blogImageFile) return;

    const res = await fetch("/api/uploadImage", { method: "POST" });
    const { url, fields, key } = await res.json();

    const formData = new FormData();

    Object.entries(fields).forEach(([k, v]) => {
      formData.append(k, v as string);
    });

    formData.append("Content-Type", "image/jpeg");
    formData.append("file", blogImageFile);

    const uploadRes = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!uploadRes.ok) {
      toast.error("S3 rejected upload");
    }

    const imageUrl = `${url}${key}`;
    return imageUrl;
  };

  const handleModelChange = (value: string) => {
    setContent(value);
  };

  async function createBlog() {
    let imageUrl;
    try {
      if (blogImageFile) {
        imageUrl = await handleImageUpload();
      }
      const slug = slugify(blogTitle, {
        lower: true,
        strict: true,
      });
      const res = await axios.post("/api/blog", {
        title: blogTitle,
        slug: slug,
        content: content,
        readMin: blogReadMin,
        imageUrl: imageUrl,
        description: blogDescription,
      });
      if (res.status == 200) {
        toast.success("Blog Published");
        fetchBlogs();
        setOpen(false);
      }
    } catch (e) {
      if (
        axios.isAxiosError(e) &&
        e.response &&
        e.response.data &&
        e.response.data.message
      ) {
        toast.error(`Publish Failed: ${e.response.data.message}`);
      } else {
        toast.error("Publish Failed: An unexpected error occurred");
      }
    }
  }
  async function editBlog() {
    let imageUrl;
    try {
      if (typeof blogImageFile !== "string" && blogImageFile) {
        imageUrl = await handleImageUpload();
      } else {
        imageUrl = blogImageFile;
      }
      const res = await axios.put("/api/blog", {
        id: selectedBlogId,
        title: blogTitle,
        content: content,
        readMin: blogReadMin,
        imageUrl: imageUrl,
        description: blogDescription,
      });
      if (res.status == 200) {
        toast.success("Blog Published");
        fetchBlogs();
        setOpen(false);
      }
    } catch (e) {
      if (
        axios.isAxiosError(e) &&
        e.response &&
        e.response.data &&
        e.response.data.message
      ) {
        toast.error(`Publish Failed: ${e.response.data.message}`);
      } else {
        toast.error("Publish Failed: An unexpected error occurred");
      }
    }
  }

  const submitBlog = async () => {
    setIsLoading(true);
    if (selectedBlogId) {
      await editBlog();
      setSelectedBlogId(null);
    } else {
      await createBlog();
    }
    setIsLoading(false);
  };

  const setToEditBlog = (blog: Blog) => {
    setSelectedBlogId(blog.id);
    setBlogTitle(blog.title);
    setBlogReadMin(blog.readMin.toString());
    setBlogDescription(blog.description);
    setBlogImageFile(blog.imageUrl);
    setContent(blog.content);
  };
  const clearEditBlog = () => {
    setSelectedBlogId(null);
    setBlogTitle("Untiltled Blog");
    setBlogReadMin("0");
    setBlogDescription("");
    setBlogImageFile(null);
    setContent("");
  };

  const deleteBlog = async (id: string) => {
    const res = await axios.delete(`/api/blog`, { data: { id } });
    if (res.status == 200) {
      toast.success("Blog Deleted");
      fetchBlogs();
    }
  };

  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <section className="relative py-5 max-lg:overflow-hidden">
      <div className="absolute left-0 hidden blur-xl md:block">
        <LeftVector />
      </div>
      <div className="absolute right-0 blur-xl">
        <RightVector />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blogs</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant={"outline"}
              className="z-1 cursor-pointer"
              onClick={() => [setOpen(true),clearEditBlog()]}
            >
              Create New
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90%] min-w-6xl overflow-y-scroll">
            <DialogHeader>
              <DialogTitle> Create New Blog</DialogTitle>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label>Blog Title</label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    className="w-full rounded-md border border-black p-2"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex w-full flex-col gap-2">
                  <label>Blog Description</label>
                  <input
                    type="text"
                    value={blogDescription}
                    onChange={(e) => setBlogDescription(e.target.value)}
                    className="w-full rounded-md border border-black p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Blog Read Min</label>
                  <input
                    type="text"
                    value={blogReadMin}
                    onChange={(e) => setBlogReadMin(e.target.value)}
                    className="w-full rounded-md border border-black p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label>Blog thumbnail</label>
                {!blogImageFile && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageSelected(e)}
                    className="w-full rounded-md border border-black p-2"
                  />
                )}
                {blogImageFile && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      typeof blogImageFile === "string"
                        ? blogImageFile
                        : URL.createObjectURL(blogImageFile)
                    }
                    alt="preview"
                    className="rounded-xl"
                    width={500}
                  />
                )}
                {blogImageFile && (
                  <Button
                    onClick={() => setBlogImageFile(null)}
                    variant={"outline"}
                    className="z-1 cursor-pointer pt-2"
                  >
                    Remove Image
                  </Button>
                )}
              </div>
              <FroalaClient model={content} onModelChange={handleModelChange} />
              <div className="flex justify-end">
                <Button
                  variant={"outline"}
                  onClick={submitBlog}
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Publishing..."
                    : selectedBlogId
                      ? "Update"
                      : "Publish"}
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-5 pt-10">
        {blogs.map((blog, i) => (
          <div
            className="z-1 flex gap-5 rounded-lg border border-black p-2 duration-100 hover:scale-101 hover:shadow-2xl"
            key={i}
          >
            {blog.imageUrl && (
              <Image
                src={blog.imageUrl}
                alt="image"
                className="rounded-xl"
                width={200}
                height={200}
              />
            )}
            <div className="flex w-full justify-between">
              <div>
                <p className="font-bold">{blog.title}</p>
                <p className="test-sm">{blog.description}</p>
              </div>
              <div className="flex h-full items-center gap-5">
                <button onClick={() => [setToEditBlog(blog), setOpen(true)]}>
                  <SquarePen />
                </button>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Trash />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button
                          className="bg-red-500 text-white hover:bg-red-600"
                          onClick={() => deleteBlog(blog.id)}
                        >
                          Continue
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
