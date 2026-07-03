export default function VideoCard({
  chapter = "الفصل الأول",
  title = "عنوان الفيديو",
  description = "وصف الفيديو المحاضرة بالكامل وشرح التفاصيل اللازمة لفهم المحتوى.",
  duration = "10 دقائق",
  instructor = "د. إبراهيم محمد",
  progress = 0,
  thumbnail = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
  horizontal = false,
  onClick,
}) {
  const playButton = (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
        <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
      </div>
    </div>
  );

  const progressIndicator = progress > 0 && (
    <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-white/20">
      <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
    </div>
  );

  if (horizontal) {
    return (
      <div 
        onClick={onClick}
        className="glass-card overflow-hidden rounded-xl shadow-sm flex flex-col md:flex-row gap-6 p-6 cursor-pointer hover:shadow-md transition-all duration-300"
      >
        <div className="relative group shrink-0 w-full md:w-64 h-36 rounded-xl overflow-hidden bg-on-surface">
          <img
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
            alt={title}
            src={thumbnail}
          />
          {playButton}
          {progressIndicator}
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-wider text-primary font-bold mb-1">
            {chapter}
          </span>
          <h5 className="text-headline-md font-display-lg text-on-surface mb-2">
            {title}
          </h5>
          <p className="text-on-surface-variant font-body-md mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-4 text-on-surface-variant text-sm">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">person</span>
              <span>{instructor}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical Layout (Default Grid Card)
  return (
    <div 
      onClick={onClick}
      className="glass-card overflow-hidden rounded-2xl shadow-sm flex flex-col cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="relative w-full h-44 bg-on-surface overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
          alt={title}
          src={thumbnail}
        />
        {playButton}
        {progressIndicator}
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-primary font-bold block mb-1">
            {chapter}
          </span>
          <h5 className="font-display-lg text-lg text-on-surface mb-2 line-clamp-1">
            {title}
          </h5>
          <p className="text-on-surface-variant font-body-md text-xs line-clamp-2 mb-4">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant text-[11px] border-t border-outline-variant/20 pt-3">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">person</span>
            <span>{instructor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
