import { BarChart3, FileText } from "lucide-react";

export function RelatedContentIcons({ content }: { content: string[] }) {
  return (
    <div className="flex items-center gap-1">
      {content.map((type, index) => (
        <div key={index} className="w-5 h-5 text-green-600">
          {type === "doc" && <FileText className="w-4 h-4" />}
          {type === "chart" && <BarChart3 className="w-4 h-4" />}
        </div>
      ))}
    </div>
  );
}
