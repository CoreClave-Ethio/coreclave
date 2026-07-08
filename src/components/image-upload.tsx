"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase";

interface ImageUploadProps {
  value: string | null;
  onChange: (url: string | null) => void;
  bucket?: string;
  folder?: string;
}

export function ImageUpload({
  value,
  onChange,
  bucket = "blog-images",
  folder = "covers",
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file (PNG, JPG, WebP, GIF)");
        return;
      }

      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("File size must be less than 5MB");
        return;
      }

      // Show local preview immediately
      const localPreview = URL.createObjectURL(file);
      setPreview(localPreview);
      setIsUploading(true);

      try {
        const supabase = createClient();

        // Generate unique filename
        const fileExt = file.name.split(".").pop()?.toLowerCase() || "png";
        const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2, 10)}.${fileExt}`;

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
          .from(bucket)
          .upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          throw error;
        }

        // Get public URL
        const {
          data: { publicUrl },
        } = supabase.storage.from(bucket).getPublicUrl(data.path);

        onChange(publicUrl);
        setPreview(publicUrl);
      } catch (err: any) {
        console.error("Upload error:", err);
        alert(`Upload failed: ${err.message || "Unknown error"}`);
        // Revert to previous value
        setPreview(value);
      } finally {
        setIsUploading(false);
        // Reset input so same file can be selected again
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    },
    [bucket, folder, onChange, value]
  );

  const handleRemove = useCallback(() => {
    onChange(null);
    setPreview(null);
  }, [onChange]);

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-white/80 block">
        Cover Image
      </label>

      {preview ? (
        <div className="relative group">
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-core-navy">
            <img
              src={preview}
              alt="Cover preview"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isUploading}
          className="w-full aspect-video rounded-xl border-2 border-dashed border-white/15 hover:border-core-accent/40 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col items-center justify-center gap-3 transition-colors disabled:opacity-50"
        >
          {isUploading ? (
            <>
              <Loader2 className="w-8 h-8 text-core-accent animate-spin" />
              <span className="text-sm text-white/50">Uploading...</span>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-white/40" />
              </div>
              <div className="text-center">
                <span className="text-sm text-white/60 font-medium flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5" />
                  Click to upload image
                </span>
                <p className="text-xs text-white/30 mt-1">
                  PNG, JPG, WebP, GIF up to 5MB
                </p>
              </div>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleFileSelect}
        className="hidden"
      />

      {preview && !isUploading && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="text-sm text-core-accent hover:text-core-cyan transition-colors"
        >
          Change image
        </button>
      )}
    </div>
  );
}
