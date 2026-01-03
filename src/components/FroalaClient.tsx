"use client";

import dynamic from "next/dynamic";

// ⚠️ IMPORTANT: Froala imports ONLY here
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

const FroalaEditor = dynamic(
  () => import("react-froala-wysiwyg"),
  { ssr: false }
);

export default function FroalaClient({
  model,
  onModelChange,
}: {
  model: string;
  onModelChange: (value: string) => void;
}) {
  return (
    <FroalaEditor
      tag="textarea"
      model={model}
      onModelChange={onModelChange}
      config={{
        heightMin: 300,
        heightMax: 300,
        imageUploadURL: "/api/uploadImage",
        imageUploadMethod: "POST",
        imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
      }}
    />
  );
}
