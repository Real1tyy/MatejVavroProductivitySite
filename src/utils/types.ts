export interface Tool {
	name: string;
	slug: string;
	description: string;
	githubUrl: string;
	docsUrl?: string;
	youtubeUrl?: string;
	videoId?: string;
	githubRepo: string; // e.g., "Real1tyy/Periodix-Planner"
}

export interface SupportOption {
	name: string;
	description: string;
	url: string;
	color: string;
	hoverColor: string;
}
