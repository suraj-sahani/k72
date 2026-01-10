import { cn } from "../../lib/utils";

type Props = {
  src: string;
  containerClassName?: string;
  videoClassName?: string;
};
export default function VideoShowcase({
  src,
  containerClassName,
  videoClassName,
}: Props) {
  return (
    <div className={cn("h-full w-full", containerClassName)}>
      <video
        src={src}
        autoPlay
        loop
        muted
        className={cn("h-full w-full object-cover", videoClassName)}
      />
    </div>
  );
}
