import { cn } from "@/lib/utils";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductScreenshot({
  src,
  alt,
  className,
}: ProductScreenshotProps) {
  return (
    <div className={cn("rounded-xl shadow-xl overflow-hidden", className)}>
      {/* Browser chrome */}
      <div className="bg-gray-100 rounded-t-xl h-10 flex items-center px-4">
        {/* Traffic light dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Fake address bar */}
        <div className="flex-1 mx-4 bg-gray-200 rounded-md h-6 flex items-center px-3">
          <span className="text-xs text-gray-500">cognaizesys.com</span>
        </div>
      </div>

      {/* Screenshot */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-b-xl"
      />
    </div>
  );
}
