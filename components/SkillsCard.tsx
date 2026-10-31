interface SkillsCardProps {
  skill: string;
  level: number;
  notes?: string;
}

export default function SkillsCard({ skill, level, notes }: SkillsCardProps) {
  return (
    <div className="bg-gray-200 p-4 rounded shadow">
      <div className="font-bold">{skill}</div>
      <div>Level: {level}/5</div>
      {notes && <div>{notes}</div>}
    </div>
  );
}