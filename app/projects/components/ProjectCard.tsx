import { Icon } from '@/components/Icon';

interface ProjectCardProps {
  name: string;
  domain: string;
  status: 'Completed' | 'Scanning' | 'Idle';
  vulnerabilities: {
    critical?: number;
    high?: number;
    medium?: number;
    progress?: number;
  };
  team: string[];
}

export function ProjectCard({
  name,
  domain,
  status,
  vulnerabilities,
  team,
}: ProjectCardProps) {
  const getStatusChip = () => {
    switch (status) {
      case 'Completed':
        return (
          <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
            <span className="mr-1 h-2 w-2 rounded-full bg-green-400"></span>
            Completed
          </div>
        );
      case 'Scanning':
        return (
          <div className="flex animate-pulse items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400">
            <span className="mr-1 h-2 w-2 rounded-full bg-blue-400"></span>
            Scanning...
          </div>
        );
      case 'Idle':
        return (
          <div className="flex items-center gap-1 rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-400">
            <span className="mr-1 h-2 w-2 rounded-full bg-gray-400"></span>
            Idle
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[.03] p-5 backdrop-blur-sm transition-all hover:border-white/20">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-sm text-[#A0A0B0]">{domain}</p>
        </div>
        {getStatusChip()}
      </div>

      <div className="my-4 h-px w-full bg-white/10"></div>

      {status === 'Scanning' ? (
        <>
          <p className="text-sm text-[#A0A0B0]">Scan Progress</p>
          <div className="mt-2 w-full rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-primary"
              style={{ width: `${vulnerabilities.progress}%` }}
            ></div>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-[#A0A0B0]">Vulnerability Summary</p>
          <div className="mt-2 flex items-center gap-4">
            {vulnerabilities.critical ? (
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="font-medium text-white">
                  {vulnerabilities.critical}
                </span>
                <span className="text-xs text-[#A0A0B0]">Critical</span>
              </div>
            ) : null}
            {vulnerabilities.high ? (
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="font-medium text-white">
                  {vulnerabilities.high}
                </span>
                <span className="text-xs text-[#A0A0B0]">High</span>
              </div>
            ) : null}
            {vulnerabilities.medium ? (
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                <span className="font-medium text-white">
                  {vulnerabilities.medium}
                </span>
                <span className="text-xs text-[#A0A0B0]">Medium</span>
              </div>
            ) : null}
          </div>
        </>
      )}

      <div className="mt-6 flex items-center justify-between">
        <div className="flex -space-x-2">
          {team.map((avatar, index) => (
            <div
              key={index}
              className="size-8 rounded-full border-2 border-background-dark bg-cover"
              style={{ backgroundImage: `url('${avatar}')` }}
            ></div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A0B0] hover:bg-white/10 hover:text-white">
            <Icon name="play_arrow" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A0B0] hover:bg-white/10 hover:text-white">
            <Icon name="visibility" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A0B0] hover:bg-white/10 hover:text-white">
            <Icon name="settings" />
          </button>
        </div>
      </div>
    </div>
  );
}