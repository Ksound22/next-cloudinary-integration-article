'use client';

import { CldUploadButton } from 'next-cloudinary';

const cloudPresetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;

const CloudinaryUploader = () => {
  return (
    <div className="flex items-center justify-center ">
      <CldUploadButton
        options={{
          multiple: true,
          sources: ['local', 'url', 'unsplash', 'camera'],
        }}
        uploadPreset={cloudPresetName}
        className="bg-green-400 py-2 px-3 rounded border mt-4 text-white  hover:bg-green-500 transition ease-in-out delay-200"
      >
        <span className="text-2xl">Upload Images</span>
      </CldUploadButton>
    </div>
  );
};

export default CloudinaryUploader;
// demo how to add sources with sources: ['local', 'url', 'unsplash', 'camera'],
