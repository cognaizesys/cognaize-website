"use client";

export function DiDemoViewer() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
        <div className="bg-gray-100 h-10 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="bg-gray-200 rounded-md h-6 flex-1 mx-4 flex items-center justify-center">
            <span className="text-xs text-gray-400">
              app.cognaizesys.com
            </span>
          </div>
        </div>
        <video
          src="/images/products/di/di-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
        />
      </div>
    </div>
  );
}
