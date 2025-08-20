import { BarChart3, FileText } from "lucide-react";

export function RelatedContentIcons({ content }: { content: string[] }) {
  return (
    <div className="flex items-center gap-1">
      {content.map((type, index) => (
        <div key={index} className="w-5 h-5 text-green-600">
          {type === "doc" && <FileText className="w-4 h-4" />}
          {type === "chart" && <BarChart3 className="w-4 h-4" />}
          {type === "data" && (
            <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
