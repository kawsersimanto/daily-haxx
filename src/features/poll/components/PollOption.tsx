import { Progress } from "@/components/ui/progress";
import { PollOptionProps } from "@/features/poll";
import { cn } from "@/lib/utils";

export const PollOption = ({
  id,
  text,
  percentage,
  highlight,
  setSelectedOptionId,
}: PollOptionProps) => {
  return (
    <div
      onClick={() => setSelectedOptionId(id)}
      className={cn(
        "py-4.5 px-5 rounded border border-border cursor-pointer relative overflow-hidden",
        "before:content-[''] before:w-[6px] before:h-full before:absolute before:left-0 before:top-0",
        highlight ? "before:bg-sea-green" : "before:bg-transparent"
      )}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-5 justify-between">
          <p className="font-work-sans font-medium">{text}</p>
          <p className="text-lg font-medium">{percentage}%</p>
        </div>
        <Progress
          value={percentage}
          className={cn(
            highlight ? "[&>div]:bg-sea-green" : "[&>div]:bg-primary"
          )}
        />
      </div>
    </div>
  );
};
