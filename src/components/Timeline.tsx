interface TimelineEvent {
  year: string;
  event: string;
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>
      {events.map((item, index) => (
        <div
          key={item.year}
          className={`relative mb-8 flex w-full items-center ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          <div
            className={`w-1/2 ${
              index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
            }`}
          >
            <p className="font-bold font-headline text-lg text-primary">{item.year}</p>
            <p className="mt-1 text-muted-foreground">{item.event}</p>
          </div>
          <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-primary ring-8 ring-background"></div>
        </div>
      ))}
    </div>
  );
}
