type Status = 'in_progress' | 'finished' | 'abandoned';

type Project = {
  name: string,
  description: string,
  status: Status,
  link: string,
  usedTechnologies: string[],
}